import React from "react";
import { BiChevronDown } from "react-icons/bi";

const GeneralinfoBox = () => {
  return (
    <div className=" w-1/4 h-full lg:block hidden ">
      <div className="w-full h-3/5  text-[#9c9c9c]">
        <div className=" w-full p-4 h-3/5">
          <p className="text-[#10a37f] font-[500]">general info</p>

          <div className="w-full h-4/5 flex flex-col justify-evenly">
            <li className="w-full flex justify-between">
              <span>name</span>
              <span>miscellanous sellout</span>
            </li>
            <li className="w-full flex justify-between">
              <span>email</span>
              <span>email</span>
            </li>
            <li className="w-full flex justify-between">
              <span>phone</span>
              <span>phone number</span>
            </li>
            <li className="w-full flex justify-between">
              <span>company</span>
              <span>company</span>
            </li>
            <li className="w-full flex justify-between">
              <span>location</span>
              <span>location</span>
            </li>
          </div>
        </div>
        <div className="w-full h-2/5 p-4 flex flex-col justify-around border-y-[1px] ">
          <p className="text-[#10a37f] font-[500] flex justify-between items-center">
            <span>notes</span>

            <span className="text-[25px]">
              <BiChevronDown />
            </span>
          </p>
          <textarea
            className="w-full h-3/5 border-[1px]"
            name=""
            id=""
            cols="30"
            rows="10"
          ></textarea>
        </div>
      </div>
    </div>
  );
};

export default GeneralinfoBox;
