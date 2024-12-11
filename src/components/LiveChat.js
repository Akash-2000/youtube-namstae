import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ChatMessage from "./ChatMessage";
import { addmessage } from "./utils/chatSlice";
import { generateRandomNames, makeId } from "./utils/helper";

const LiveChat = () => {
  const dispatch = useDispatch();
  const [liveMessage, setLiveMessage] = useState("");
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
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="border border-black">
      <div className="w-full h-[515px] ml-1 rounded-md overflow-scroll no-scrollbar flex flex-col-reverse">
        <div>
          {messages?.map((message, index) => (
            <ChatMessage
              key={index}
              name={message.name}
              message={message.message}
            />
          ))}
        </div>
      </div>
      <div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            dispatch(
              addmessage({
                name: "Akash",
                message: liveMessage,
              })
            );
            setLiveMessage("");
          }}
        >
          <input
            name="live"
            placeholder="Enter live chat"
            value={liveMessage}
            onChange={(e) => setLiveMessage(e.target.value)}
            className="border p-2 border-black w-3/4 rounded-md mx-2"
          />
          <button
            type="submit"
            disabled={!liveMessage.length > 0}
            className="p-2 border bg-green-200 w-1/5 text-white rounded-md"
          >
            send
          </button>
        </form>
      </div>
    </div>
  );
};

export default LiveChat;
