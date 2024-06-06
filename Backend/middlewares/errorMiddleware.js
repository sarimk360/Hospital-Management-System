class ErrorHandler extends Error {
    constructor(message, statusCode) {
      super(message);
      this.statusCode = statusCode;
    }
  }
  
  export const errorMiddleware = (err, req, res, next) => {
    let error = { ...err };
    error.message = err.message || "Internal Server Error";
    error.statusCode = err.statusCode || 500;
  
    if (err.code === 11000) {
      const message = `Duplicate ${Object.keys(err.keyValue)} Entered`;
      error = new ErrorHandler(message, 400);
    }
  
    if (err.name === "JsonWebTokenError") {
      const message = "Json Web Token is invalid, Try again!";
      error = new ErrorHandler(message, 400);
    }
  
    if (err.name === "TokenExpiredError") {
      const message = "Json Web Token is expired, Try again!";
      error = new ErrorHandler(message, 400);
    }
    if (err.name === "CastError") {
      const message = `Invalid ${err.path}`;
      error = new ErrorHandler(message, 400);
    }
  
    const errorMessage = error.errors
      ? Object.values(error.errors).map((error) => error.message).join(" ")
      : error.message;
  
    return res.status(error.statusCode).json({
      success: false,
      message: errorMessage,
    });
  };
  
  export default ErrorHandler;