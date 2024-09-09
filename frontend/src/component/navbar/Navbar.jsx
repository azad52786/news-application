import React, { useRef, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { CiFilter } from "react-icons/ci";

const Navbar = () => {
  // const [search , setSearch ] = useState("");
  const search = useRef("");
  return (
    <div className=" w-full h-fit mx-auto bg-richblack-600 border-b border-richblack-50 border-opacity-40">
      <div className=" w-[90%] mx-auto h-fit py-2 flex items-center justify-between">
        <div className="h-fit w-fit px-2 md:px-4 rounded-md py-1 pb-3 font-edu-sa text-2xl md:text-3xl bg-white text-black font-bold">
          gnews
        </div>
        <div className=" flex items-center justify-end gap-x-3">
          <div className=" h-fit rounded-lg w-fit relative">
            <input
              type="text"
              ref={search}
              className=" h-9 w-[10rem] md:w-[16rem] rounded-[1rem] 
                 outline-none bg-richblack-200 pl-5
                  bg-opacity-75 pr-10"
              placeholder="Search Your News"
            />
            <FaSearch
              className=" absolute right-4 top-[30%]
                   text-richblack-5  cursor-pointer "
            />
          </div>
          <div className="h-fit cursor-pointer font-edu-sa flex items-center gap-x-2 font-semibold py-2 bg-blue-200 px-2 rounded-md">
            <p className="hidden md:block text-lg">Filter</p>
            <CiFilter className=" w-5 h-5"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
