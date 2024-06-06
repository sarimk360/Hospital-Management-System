import React, { useContext, useEffect, useState } from "react";
import { Context } from "../main";
import axios from "axios";
import { Navigate } from "react-router-dom";
import uuid from "react-uuid";

const Messages = () => {
  const [messages, setMessages] = useState([]);
  const { isAuthenticated } = useContext(Context);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await axios.get(
          "https://hospital-management-system-ixd5.onrender.com/api/v1/message/getall",
          { withCredentials: true }
        );
        // console.log(response)
        // console.log(response.data.message);
        setMessages(response.data.messages);
      } catch (error) {
        console.log("Error occured while fetching messages", error);
      }
    };
    fetchMessages();
  }, []);

  if (!isAuthenticated) {
    return <Navigate to={"/login"} />;
  }

  return (
    <section className="page messages">
      <h1>Messages</h1>
      <div className="banner">
        {messages && messages.length > 0 ? (
          messages.map((element) => {
            return (
              <div className="card" key={uuid()}>
                <div className="details">
                  <p>
                    First Name: <span>{element.firstName}</span>
                  </p>
                  <p>
                    Last Name: <span>{element.lastName}</span>
                  </p>

                  <p>
                    Email: <span>{element.email}</span>
                  </p>
                  <p>
                    Phone: <span>{element.phone}</span>
                  </p>
                  <p>
                    Message: <span>{element.message}</span>
                  </p>
                </div>
              </div>
            );
          })
        ) : (
          <h1>No Messages</h1>
        )}
      </div>
    </section>
  );
};

export default Messages;
