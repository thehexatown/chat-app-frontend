import "./message.css";
import { format } from "timeago.js";
import axios from "axios";
import { useEffect, useState, useContext } from "react";

export default function Message({ message, own, currentChat, currentUser }) {
  const [user, setUser] = useState(null);
  useEffect(() => {
    // getUser();
  }, []);

  return (
    <div className={own ? "message own" : "message"}>
      <div className="messageTop">
        <img
          className="messageImg"
          src="https://images.pexels.com/photos/3686769/pexels-photo-3686769.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
          alt=""
        />
        <div>
          <div className="messageWrap">
            <p className="messageText">{message.text}</p>
          </div>
          <div className="messageBottom">{format(message.createdAt)}</div>
        </div>
      </div>
    </div>
  );
}
