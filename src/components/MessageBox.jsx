import React from "react";
import { TbUsersPlus } from "react-icons/tb";
import { AiOutlineCloseCircle } from "react-icons/ai";
const MessageBox = () => {
  return (
    <div className="w-1/3 h-full overflow-scroll lg:block hidden border-r-[1px] ">
      <div
        id="chat-header"
        className="w-full border-[0.5px] h-[62px] flex justify-between px-4 "
      >
        <div id="description" className="w-1/2 h-full flex items-center">
          <span
            className={`relative flex justify-center items-center w-10 h-10    bg-[#eb4034]  rounded-full p-2 text-[16px] font-[600] text-white`}
          >
            E
          </span>
          <span className="bg-[#00D67F] rounded-lg h-2 w-2 relative top-4 right-3"></span>
          <div className="flex flex-col text-black">
            <p className="font-[500] text-[16px]">expected whirpool</p>
            <p className="text-[13px] font-[400] text-[#9c9c9c]">online</p>
          </div>
        </div>
        <div id="btns" className="w-1/2 flex justify-end items-center">
          <button className="mr-4 text-black border-[1px] p-1 px-2 rounded-md flex items-center">
            <span className="mr-1">
              <TbUsersPlus />
            </span>
            <span>review</span>
          </button>
          <button className="text-white bg-black flex items-center  border-[1px] p-1 px-2 rounded-md">
            <span className="mr-1">
              <AiOutlineCloseCircle />
            </span>
            <span>close</span>
          </button>
        </div>
      </div>

      <div id="chat-details" className="w-full h-fit p-5">
        <div className="flex justify-start items-center w-full text-black">
          <li
            className="p-3 w-3/4 h-fit rounded-r-2xl rounded-b-2xl  
           bg-[#edecec] flex flex-col justify-around"
          >
            <p className="text-[13px]">
              Ok and as I am a music producer does dukaan has the music preview
              feature for the digital till Ac.
            </p>
            <p className="text-[11px] text-[#9c9c9c] ">3:48 PM</p>
          </li>
        </div>

        <div className="flex justify-end items-center w-full text-black mt-3">
          <li
            className="p-3 w-3/4 h-fit rounded-l-2xl rounded-b-2xl  
           bg-[#f5f9ff] flex flex-col justify-around"
          >
            <p className="text-[13px]">
              Yes. Dukaan provides a music preview feature for digital files.
              Customers can listen to a preview of the music before making a
              purchase .
            </p>
            <p className="text-[11px] text-[#9c9c9c] ">3:48 PM</p>
          </li>
        </div>
        <div className="flex justify-start items-center w-full text-black mt-3 ">
          <li
            className="p-3 w-fit h-fit rounded-r-2xl rounded-b-2xl  
           bg-[#edecec] flex flex-col justify-around"
          >
            <p className="text-[13px]">can see any demo site</p>
            <p className="text-[11px] text-[#9c9c9c] ">3:49 PM</p>
          </li>
        </div>
        <div className="flex justify-end items-center w-full text-black mt-3">
          <li
            className="p-3 w-3/4 h-fit rounded-l-2xl rounded-b-2xl  
           bg-[#f5f9ff] flex flex-col justify-around"
          >
            <p className="text-[13px]">
              Certainly! You can visit the Dukaan demo site at{" "}
              <span className="text-[#10a37f]">
                https://mydukaan.io/amazedemo
              </span>
              to see how it looks and explore Its features
            </p>
            <p className="text-[11px] text-[#9c9c9c] ">3:50 PM</p>
          </li>
        </div>
        <div className="flex justify-start items-center w-full text-black mt-3 ">
          <li
            className="p-3 w-fit h-fit rounded-r-2xl rounded-b-2xl  
           bg-[#edecec] flex flex-col justify-around"
          >
            <p className="text-[13px]">It does not have any music</p>
            <p className="text-[11px] text-[#9c9c9c] ">3:51 PM</p>
          </li>
        </div>
        <div className="flex justify-end items-center w-full text-black mt-3">
          <li
            className="p-3 w-3/4 h-fit rounded-l-2xl rounded-b-2xl  
           bg-[#f5f9ff] flex flex-col justify-around"
          >
            <p className="text-[13px]">
              Unfortunately I don't have any access to the specific content of
              the demo site
            </p>
            <p className="text-[11px] text-[#9c9c9c] ">3:52 PM</p>
          </li>
        </div>
        <div className="flex justify-start items-center w-full text-black mt-3 ">
          <li
            className="p-3 w-fit h-fit rounded-r-2xl rounded-b-2xl  
           bg-[#edecec] flex flex-col justify-around"
          >
            <p className="text-[13px]">How to test</p>
            <p className="text-[11px] text-[#9c9c9c] ">3:53 PM</p>
          </li>
        </div>
        <div className="flex justify-end items-center w-full text-black mt-3">
          <li
            className="p-3 w-3/4 h-fit rounded-l-2xl rounded-b-2xl  
           bg-[#f5f9ff] flex flex-col justify-around"
          >
            <p className="text-[13px]">
              To test the dukaan platform, you can sign up for a free trial on
              dukaan offical webiste. This will allow you to create your own
              online store and explore the features and functionalities of the
              platform
            </p>
            <p className="text-[11px] text-[#9c9c9c] ">3:48 PM</p>
          </li>
        </div>
      </div>
    </div>
  );
};

export default MessageBox;
3;
