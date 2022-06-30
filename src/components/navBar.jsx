import React from "react";
import { ImLifebuoy } from "react-icons/im";
import { AiOutlineMenu } from "react-icons/Ai";
function NavBar() {
  return (
    <div className="flex h-2/6 justify-between items-center shadow-md border-b bg-white">
      <div id="logo" className="drop-shadow-md">
        <ImLifebuoy className="h-20 w-14 text-cyan-400  ml-6 text-gradient-to-r from-cyan-500 to-blue-400" />
      </div>
      <div className="h-full">
        <div className="h-20 items-center flex">
          <AiOutlineMenu className="text-4xl" />
        </div>
      </div>
    </div>
  );
}

export default NavBar;
