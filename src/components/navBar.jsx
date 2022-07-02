import React from "react";
import { ImLifebuoy } from "react-icons/im";
import { AiOutlineMenu } from "react-icons/Ai";
function NavBar() {
  return (
    <div className="flex h-20 sticky top-0  justify-between items-center shadow-md border-b bg-opacity-100 bg-white">
      <div id="logo" className="drop-shadow-md w-2/12 justify-around flex items-center">
        <ImLifebuoy className="h-20 w-14 text-cyan-400  ml-6 text-gradient-to-r from-cyan-500 to-blue-400" />
        <h1  className="heading text-[#082D92]  text-5xl">Apotre</h1>
      </div>
      <div className="w-4/12">
        <ul className="flex w-10/12 justify-around ">
          <li className="text-md cursor-pointer text-[#082D92] hover:border-b-2 hover:border-red-400 transition-all delay-250 font-black">Home</li>
          <li className="text-md cursor-pointer text-[#082D92] hover:border-b-2 hover:border-red-400 transition-all delay-250 font-black">About</li>
          <li className="text-md cursor-pointer text-[#082D92] hover:border-b-2 hover:border-red-400 transition-all delay-250 font-black"><a href="#quickMessage">Skills</a></li>
          <li className="text-md cursor-pointer text-[#082D92] hover:border-b-2 hover:border-red-400 transition-all delay-250 font-black">Contact</li>
        </ul>
      </div>
      <div className="h-full">
        <div className="h-20 items-center hidden">
          <AiOutlineMenu className="text-4xl" />
        </div>
      </div>
    </div>
  );
}

export default NavBar;
