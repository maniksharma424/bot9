import React from "react";
import { BsFillTerminalFill } from "react-icons/bs";
import { FiInbox } from "react-icons/fi";
import { SiFastapi } from "react-icons/si";
import { RxDashboard } from "react-icons/rx";
import { HiUsers } from "react-icons/hi";
import { BiBookContent } from "react-icons/bi";
import { BiChevronDown } from "react-icons/bi";

const Navbar = () => {
  return (
    <div className="bg-[#343a40] w-full h-full flex">
      <div className="w-1/6 bg-[#23262D] flex justify-start items-center ">
        <img
          src="https://app.bot9.ai/dist/img/logo_white.svg"
          className="sm:w-2/5 sm:h-3/4  w-full h-full sm:ml-5 p-2 "
          alt=""
          srcset=""
        />
      </div>

      <div
        id="icons"
        className="w-3/6  lg:flex hidden justify-around items-center text-[#9c9c9c] text-[14px]"
      >
        <li className="flex items-center">
          <span className="mr-1 text-[22px]">
            <BiBookContent />
          </span>
          dashboard
        </li>
        <li className="flex items-center">
          <span className="mr-1 text-[22px]">
            <FiInbox />
          </span>
          inbox
        </li>
        <li className="flex items-center">
          <span className="mr-1 text-[22px]">
            <SiFastapi />
          </span>
          train
        </li>
        <li className="flex items-center">
          <span className="mr-1 text-[22px]">
            <RxDashboard />
          </span>
          apps
        </li>
        <li className="flex items-center">
          <span className="mr-1 text-[22px]">
            <HiUsers />
          </span>
          contacts
        </li>
        <li className="flex items-center">
          <span className="mr-1 text-[22px]">
            <BsFillTerminalFill />
          </span>
          playground
        </li>
      </div>
      <div
        id="active-btn"
        className="lg:w-2/6 w-5/6 flex justify-end items-center px-5"
      >
        <button className="bg-[#333537] w-[120px] h-[30px] rounded-md  text-white flex justify-around items-center p-2">
          <span className="bg-[#10a37f] rounded-lg h-3 w-3"></span>
          <span>active</span>
          <span>
            <BiChevronDown />
          </span>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
