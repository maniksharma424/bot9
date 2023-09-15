import React from "react";
import { CiSearch } from "react-icons/ci";
//import messages from "../../src/messages.json";
import MessageCard from "./MessageCard";
import { GiHamburgerMenu } from "react-icons/gi";

const Inbox = ({ messages }) => {

  return (
    <div className="border-r-[0.5px] w-full  lg:w-1/4 h-full flex flex-col ">
      <div
        id="search-box"
        className="w-full h-[65px] border-[0.5px] flex justify-between items-center  sm:px-5  pr-4  text-[25px] font-[400] text-black"
      >
        <div className=" sm:hidden text-black w-1/6 flex justify-center ">
          <GiHamburgerMenu />
        </div>
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
