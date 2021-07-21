import React, { useState, useEffect } from "react";
import ReactDom from "react-dom";
import webSocket from "socket.io-client";

const Chat = (room_name) => {
  const [ws, setWs] = useState(webSocket("http://localhost:3000"));
  const [msgs, setMessage] = useState([]);
  const [input, setInput] = useState([]);

  useEffect(() => {
    if (ws) {
      initWebSocket();
    }
  });

  const initWebSocket = () => {
    ws.on("getMessageAll", (message) => {
      const newMessage = msgs.concat(message);
      setMessage(newMessage);
    });
    ws.on("addRoom", (message) => {
      const newMessage = msgs.concat(message);
      setMessage(newMessage);
    });
  };
  const enterRoom = () => {
    let room = room_name.room_name;
    if (room !== "") {
      ws.emit("addRoom", room);
    }
  };
  const sendMessage = function (e) {
    if (e.key === "Enter") ws.emit("getMessageAll", e.target.value);
  };
  return (
    <div>
      <div className="buttons">
        <button onClick={enterRoom}>Enter {room_name.room_name}</button>
        <input
          type="text"
          placeholder="type something..."
          onKeyPress={sendMessage}
        />
      </div>
      <ul id="chatroom_interval">
        {msgs.map((msg) => (
          <li key={msg.id}>{msg}</li>
        ))}
      </ul>
    </div>
  );
};
export default Chat;
