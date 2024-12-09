import React from "react";

const ChatMessage = ({ name, message }) => {
  return (
    <div className="flex items-center p-2 shadow-md">
      <img
        alt="user-profile"
        className="h-9"
        src="https://pluspng.com/img-png/png-user-icon-circled-user-icon-2240.png"
      />
      <span className="font-bold px-4">{name}</span>
      <span>{message}</span>
    </div>
  );
};

export default ChatMessage;
