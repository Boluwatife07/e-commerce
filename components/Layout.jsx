import React from "react";
import { AiOutlineCaretRight, AiOutlineCaretLeft } from "react-icons/ai";
import { FaRegHeart } from "react-icons/fa";
import { FaBagShopping } from "react-icons/fa6";
import { IoPersonOutline } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";

export default function Layout({ children }) {
  return (
    <div>
      <div className=" flex flex-col bg-[#f5f5f5]">
        <div className=" w-full pt-6">
          <div className="grid grid-cols-3 w-full ">
            <div className="  flex  items-center gap-16 py-3  px-10 text-xl">
              <div className="cursor-pointer flex justify-center text-2xl">
                <GiHamburgerMenu />
              </div>
              <div className="cursor-pointer hover:text-gray-300 ">
                Home
              </div>
              <div className="cursor-pointer hover:text-gray-300 ">
                Collections
              </div>
              <div className="cursor-pointer hover:text-gray-300 ">
                New
              </div>
            </div>

            <div className=" col-span-2 grid grid-cols-2 ">
              <div className=" w-full flex justify-center text-5xl">
                <div className=" text-[#D9D9D9]">
                  <AiOutlineCaretLeft />
                </div>
                <div className="">
                  <AiOutlineCaretRight />
                </div>
              </div>
              <div className=" grid grid-cols-3 w-full">
                <div className="  -rotate-45 w-fit h-fit cursor-pointer rounded-full text-xl text-center p-3 flex items-center bg-black text-white ">
                  <FaRegHeart />
                </div>
                <div className=" flex ">
                  <div className="h-fit w-fit p-3 px-4 rounded-2xl text-white bg-black ">
                    Cart
                  </div>
                  <div className="h-fit p-2 rounded-full bg-black flex items-center ">
                    <div className=" text- rounded-full bg-white p-2">
                      <FaBagShopping />
                    </div>
                  </div>
                </div>
                <div className=" flex justify-center">
                  <div className="h-fit w-fit text-2xl text-white p-3 rounded-full bg-black flex items-center">
                    <IoPersonOutline />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="h-full w-full">
          {children}
        </div>
      </div>
    </div>
  );
}
