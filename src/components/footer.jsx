import React from "react";
import { BiSend } from "react-icons/bi";
function Footer() {
  return (
    <React.Fragment>
      <div className="flex flex-col bg-[#041C62]  relative w-full">
        <div id="horizontal" className="flex h-5/6 w-9/12 justify-around items-center m-auto">
          <div className="flex items-start mt-4">
        <h1  className="heading text-white  text-5xl">Apotre</h1><span className="text-white">&copy;</span>
          </div>
          <div className="flex flex-col text-white">
            <h1 className="text-white text-2xl">Quick Links</h1>
            <ul className="font-black flex flex-col items-center">
              <li>Home</li>
              <li>About</li>
              <li>Skills</li>
            </ul>
          </div>
          <div className="w-6/12 h-full">
            <h1 className="heading  text-center text-white  text-5xl">Contact Me</h1>
            <form action="">
              <div className="flex flex-col justify-around">
              <label htmlFor="email" className="text-white  font-extrabold">Email:</label>
              <input  name="email" type='email' id="email" className=" shadow-md shadow-lime-200  rounded-md h-10" />
              </div>
              <div className="flex flex-col justify-around">
              <label htmlFor="email" className="text-white   font-extrabold">Subject:</label>
              <input type="text" name="email" id="email" className="shadow-md shadow-lime-200 rounded-md h-10" />
              </div>
              <div className="flex flex-col justify-around">
              <label htmlFor="email" className="text-white font-extrabold">Message:</label>
              <textarea name="message" id="" cols="20" rows="6" className='shadow-md shadow-lime-200 rounded-md'></textarea>
              </div>
              <button className="bg-cyan-200 w-3/12 h-12  flex items-center shadow-md shadow-lime-200 justify-center text-2xl m-auto mt-2 rounded-md">Send<BiSend /></button>
            </form>
          </div>
        </div>
      <div id='alone' className="flex h-6  text-white  m-auto relative  text-small">
        &copy;All rights reserved. 2022 Mwenedata Apotre
      </div>
      </div>
    </React.Fragment>
  );
}

export default Footer;
