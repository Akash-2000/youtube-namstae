import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ChatMessage from "./ChatMessage";
import { addmessage } from "./utils/chatSlice";
import { generateRandomNames, makeId } from "./utils/helper";

const LiveChat = () => {
  const dispatch = useDispatch();
  const messages = useSelector((store) => store.chat.messages);
  useEffect(() => {
    const interval = setInterval(() => {
      //API polling
      console.log("Api polling..");
      dispatch(
        addmessage({
          name: generateRandomNames(),
          message: makeId(5) + "💥",
        })
      );
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-[515px] border border-black ml-1 rounded-md overflow-scroll flex flex-col-reverse">
      {messages?.map((message, index) => (
        <ChatMessage
          key={index}
          name={message.name}
          message={message.message}
        />
      ))}
    </div>
  );
};

export default LiveChat;
