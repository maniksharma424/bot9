import React from "react";
import { BiUserCircle } from "react-icons/bi";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { AiOutlineLogout } from "react-icons/ai";

const MessagingChannel = () => {
  return (

    <div className="w-1/6  h-full sm:block hidden  bg-[#faf9f9] text-[14px] text-[#9c9c9c]  border-[1px]">
      <div
        id="select-channel "
        className="w-full h-1/6 p-4  flex flex-col justify-around"
      >
        <p className="text-[#10a37f] font-[500]">messaging channels</p>
        <select
          id="channelSelect"
          className="text-[14px] border-[1px] border-gray-400 w-5/6 p-2 text-[#9c9c9c] bg-inherit rounded-lg"
        >
          <option value="All Channels">all Channels</option>
        </select>
      </div>

      <div id="status" className="w-full h-4/6   px-4 ">
        <p className="text-[#10a37f] font-[500]">status</p>

        <ul className="w-full h-1/4 flex flex-col justify-around bg-inherit">
          <li className="w-full rounded-md flex justify-start items-center bg-white p-2 px-5 h-fit">
            <span className="bg-[#10a37f] rounded-lg h-2 w-2 mr-2"></span>
            <span>bot</span>
          </li>
          <li className="w-full rounded-md flex justify-start items-center bg-inherit hover:bg-white p-2 px-5">
            <span className="bg-[#FFC400] rounded-lg h-2 w-2 mr-2"></span>
            <span>human</span>
          </li>
          <li className="w-full rounded-md flex justify-start items-center bg-inherit hover:bg-white p-2 px-5">
            <span className="bg-[#6f6f6f] rounded-lg h-2 w-2 mr-2"></span>
            <span>closed</span>
          </li>
        </ul>
      </div>

      <div id="buttons" className="w-full h-1/6 flex items-end">
        <div className="w-full h-1/2 border-[1px]  flex justify-between items-center text-[20px]  px-4 bg-white text-black">
          <BiUserCircle  />
          <AiOutlineQuestionCircle />
          <AiOutlineLogout />
        </div>
      </div>
    </div>
  );
};

export default MessagingChannel;
