import React from "react";
import { HiUsers } from "react-icons/hi";
const MessageCard = ({ message }) => {
  return (
    <div className="w-full h-[75px] p-2 flex  hover:bg-[#f3f0f0]">
      <div id="icon" className="w-1/6 lg:w-1/4 h-full flex justify-center items-center  ">
        <span
          className={`relative flex justify-center items-center w-10 h-10    bg-[${message?.backgroundColor}]  rounded-full p-2 text-[16px] font-[600] text-white`}
        >
          {message.nameLetter}
        </span>

        <img
          src="https://app.bot9.ai/dist/img/website_widget.svg"
          alt="icon"
          className="relative w-4 h-4 bottom-4 right-4"
        />
        <span className="bg-[#00D67F] rounded-lg h-2 w-2 relative top-4 right-7"></span>
      </div>
      <div
        id="message-body"
        className="w-3/4 h-full flex flex-col justify-evenly "
      >
        <p className="text-black font-[400] text-[14px]">{message.recipient}</p>
        <div className="flex w-full text-[#9c9c9c] text-[13px] font-[400]">
          <p className=" w-5/6  text-ellipsis whitespace-nowrap overflow-hidden">
            {message.message}
          </p>
          <p className="w-1/6">{message.time}</p>
        </div>
      </div>
    </div>
  );
};

export default MessageCard;
