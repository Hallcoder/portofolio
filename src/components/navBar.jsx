import React from "react";
import { ImLifebuoy } from "react-icons/im";
import { AiOutlineMenu } from "react-icons/Ai";
function NavBar() {
  return (
    <div className="flex h-2/6 justify-between items-center shadow-md border-b bg-white">
      <div id="logo" className="drop-shadow-md">
        <ImLifebuoy className="h-20 w-14 text-cyan-400  ml-6 text-gradient-to-r from-cyan-500 to-blue-400" />
      </div>
      <div className="w-4/12">
        <ul className="flex w-10/12 justify-around ">
          <li className="text-sm text-[#082D92] hover:border-b-2 hover:border-red-400 transition-all delay-250 font-bold">Home</li>
          <li className="text-sm text-[#082D92] hover:border-b-2 hover:border-red-400 transition-all delay-250 font-bold">About</li>
          <li className="text-sm text-[#082D92] hover:border-b-2 hover:border-red-400 transition-all delay-250 font-bold">Skills</li>
          <li className="text-sm text-[#082D92] hover:border-b-2 hover:border-red-400 transition-all delay-250 font-bold">Contact</li>
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
