import React from "react";
import { CiSearch } from "react-icons/ci";
import messages from "../../src/messages.json";
import MessageCard from "./MessageCard";
import { Avatar } from "primereact/avatar";
const Inbox = () => {
  console.log(messages);
  return (
    <div className="border-r-[0.5px] w-full  lg:w-1/4 h-full flex flex-col ">
      <div
        id="search-box"
        className="w-full h-[65px] border-[0.5px] flex justify-between items-center  px-7 text-[25px] font-[400] text-black"
      >
        <p>inbox</p>
        <CiSearch className="text-[22px]" />
      </div>
      <div id="messages" className="w-full h-full">
        {messages?.map((message, index) => {
          return <MessageCard key={index} message={message} />;
        })}
      </div>
    </div>
  );
};

export default Inbox;