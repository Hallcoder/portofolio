import React from "react";
import APO3 from "../images/apo3.png";
import DottedBox from "./dottedBox";
import { CgMouse, CgWebsite } from "react-icons/Cg";
import Contacts from './contacts.jsx'
import Skill from "./skill";
function Info() {
  return (
    <div className="h-screen">
      <div className="w-10/12 m-auto flex  justify-between  mt-4">
        <div id="text" className="w-6/12">
          <h1 className="text-7xl mt-28 ml-4 font-[900]  w-full text-[#041C62]">
            Hey✌️,I'm a <strong className="text-blue-500">Fullstack</strong>{" "}
            Developer.
          </h1>
          <p className="ml-8 font-bold w-8/12">
            Hello I'm Apotre an intermediate fullstack Developer based in Rwanda
            heavily interested in Computer Science. I help companies turn their
            idea into a final marketable product
          </p>
        </div>
        <div id="image" className="w-5/12 m-1">
          <img
            src={APO3}
            alt="portofolio cover"
            className="w-11/12 rounded-md  h-full mt-1 m-auto"
          />
        </div>
        <div className="clip-path"></div>
        <div className="clip-path2"></div>
        <DottedBox />
        <Contacts />
      </div>
      <div className="flex justify-center mt-4">
        <input
          type="text"
          name="small"
          className="indent-2 h-14 w-3/12 border-black rounded-lg border"
          placeholder="Quick Message..."
          id="email"
        />
        <button className="h-14 bg-[#082D92]  text-white w-24 ml-2 rounded-sm">
          Send
        </button>
      </div>
      <div className="flex w-1/12 h-10 rounded-sm justify-center cursor-pointer ml-[8em] items-center shadow-md animate-bounce">
        <CgMouse />
        <p className="font-bold">Scroll down</p>
      </div>
      <div id="Skills" className="flex h-4/6 flex-wrap m-auto w-9/12">
        <h1 className="font-bold m-auto text-5xl mb-8 w-3/12">My Skills</h1>
        <div className="flex flex-wrap justify-around h-5/6">
          <Skill
            name={"Frontend Design & Development"}
            icon={
              <CgWebsite className="rounded-md text-4xl bg-orange-100 text-orange-500" />
            }
            text={
              <p>
                <strong>Develop Intuitively.</strong>Lorem Lorem ipsum dolor sit
                amet consectetur adipisicing elit. Ducimus quam distinctio nisi
                eum quis necessitatibus. In eaque porro impedit velit? ipsum
                dolor sit amet consectetur adipisicing elit. Id natus numquam
                possimus mollitia blanditiis tempora sed nesciunt maxime veniam
                maiores.
              </p>
            }
          />
          <Skill
            name={"Mobile Apps Development"}
            icon={
              <CgWebsite className="rounded-md text-4xl bg-blue-100 text-blue-500" />
            }
            text={
              <p>
                <strong>Develop Intuitively.</strong>Lorem Lorem ipsum dolor sit
                amet consectetur adipisicing elit. Ducimus quam distinctio nisi
                eum quis necessitatibus. In eaque porro impedit velit? ipsum
                dolor sit amet consectetur adipisicing elit. Id natus numquam
                possimus mollitia blanditiis tempora sed nesciunt maxime veniam
                maiores.
              </p>
            }
          />
          <Skill
            name={"Backend Development and APIS"}
            icon={
              <CgWebsite className="rounded-md text-4xl bg-red-100 text-red-500" />
            }
            text={
              <p>
                <strong>Develop Intuitively.</strong>Lorem Lorem ipsum dolor sit
                amet consectetur adipisicing elit. Ducimus quam distinctio nisi
                eum quis necessitatibus. In eaque porro impedit velit? ipsum
                dolor sit amet consectetur adipisicing elit. Id natus numquam
                possimus mollitia blanditiis tempora sed nesciunt maxime veniam
                maiores.
              </p>
            }
          />
          <Skill
            name={""}
            icon={
              <CgWebsite className="rounded-md text-4xl bg-yellow-100 text-yellow-500" />
            }
            text={
              <p>
                <strong>Develop Intuitively.</strong>Lorem Lorem ipsum dolor sit
                amet consectetur adipisicing elit. Ducimus quam distinctio nisi
                eum quis necessitatibus. In eaque porro impedit velit? ipsum
                dolor sit amet consectetur adipisicing elit. Id natus numquam
                possimus mollitia blanditiis tempora sed nesciunt maxime veniam
                maiores.
              </p>
            }
          />
        </div>
      </div>
    </div>
  );
}

export default Info;
