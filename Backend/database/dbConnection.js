import mongoose from "mongoose";

export const dbConnection = () => {
  const connectWithRetry = () => {
    // console.log("MongoDB connection with retry");

    mongoose
      .connect(process.env.MONGO_URI, {
        dbName: "HMS_DEPLOYED",
        serverSelectionTimeoutMS: 30000, // Increase server selection timeout to 30 seconds
        socketTimeoutMS: 45000, // Increase socket timeout to 45 seconds
      })
      .then(() => {
        console.log("Connected to database");
      })
      .catch((err) => {
        console.log(`Some error occurred in database: ${err}`);
        setTimeout(connectWithRetry, 5000); // Retry connection after 5 seconds
      });
  };

  connectWithRetry();

  mongoose.connection.on("error", (err) => {
    console.error("MongoDB connection error:", err);
  });

  mongoose.connection.on("disconnected", () => {
    console.warn("MongoDB disconnected. Attempting to reconnect...");
    connectWithRetry();
  });
};
