import React from "react";
import APO3 from "../images/apo3.png";
import DottedBox from "./dottedBox";
import { CgMouse, CgWebsite } from "react-icons/Cg";
import tiktok from "../images/tiktok.png";
import Tiktok from "../images/tiktok.mp4"
import stock from "../images/stock.jpg";
import Project from "../images/projectManagement.webp";
import Contacts from "./contacts.jsx";
import Skill from "./skill";
import Work from "./work";
function Info() {
  return (
    <div className="h-3/6 ">
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
      <div className="flex w-1/12 h-10 rounded-sm justify-center cursor-pointer ml-[8em] items-center shadow-xl border-8 border-white animate-bounce">
        <CgMouse />
        <p className="font-bold">Scroll down</p>
      </div>
      <h1 className="font-bold m-auto text-5xl mb-8 w-3/12">My Skills</h1>
      <div id="Skills" className="grid gap-y-2 flex-wrap  justify-around m-auto w-9/12">
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
            name={"Web Application Development"}
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
      <div
        id="works"
        className="grid grid-cols-2 gap-2 grid-rows-2 mt-40  rounded-lg w-9/12 m-auto"
      >
        <div className="flex items-center">
        <h1 className="font-bold col-span-2 h-48 border-2 bg-[#C1FAFC] text-[#082D92] clip-path-works justify-center  flex items-center  m-auto text-5xl  w-7/12">My Works</h1>
        </div>
        <div className="border-black">
          <Work
            image={tiktok}
            className1={
              "rounded-md shadow-xl border-8 border-white col-span-1 items-end border-2"
            }
            description=" Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores,
        pariatur iste placeat dolorem ut numquam ea vero sequi eligendi quidem
        cupiditate voluptatibus. Deserunt modi vel voluptatem, maiores adipisci
        dolorem. Similique."
            link="https://tiktok-clone2.vercel.app"
          />
        </div>
        <div  className="row-span-1">
          <Work
            image={tiktok}
            className1={
              "border-2 border-white rounded-md shadow-xl border-8 border-white"
            }
            description=" Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores,
        pariatur iste placeat dolorem ut numquam ea vero sequi eligendi quidem
        cupiditate voluptatibus. Deserunt modi vel voluptatem, maiores adipisci
        dolorem. Similique."
            link="https://tiktok-clone2.vercel.app"
          />
        </div>
        <div className="w-11/12 h-full">
          <Work
            image={stock}
            className1={
              "border-2 border-white rounded-md shadow-xl border-8 border-white"
            }
            description=" Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores,
        pariatur iste placeat dolorem ut numquam ea vero sequi eligendi quidem
        cupiditate voluptatibus. Deserunt modi vel voluptatem, maiores adipisci
        dolorem. Similique."
            link="https://tiktok-clone2.vercel.app"
          />
        </div>
        <div className="row-span-1 w-11/12">
          <Work
            image={tiktok}
            className1={
              "border-2 border-white rounded-md shadow-xl border-8 border-white"
            }
            description=" Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores,
        pariatur iste placeat dolorem ut numquam ea vero sequi eligendi quidem
        cupiditate voluptatibus. Deserunt modi vel voluptatem, maiores adipisci
        dolorem. Similique."
            link="https://tiktok-clone2.vercel.app"
          />
        </div>
        <div className="row-span-1 w-full">
          <Work
            video={Tiktok}
            className1={
              "border-2 border-white rounded-md shadow-xl border-8 border-white"
            }
            description=" Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores,
        pariatur iste placeat dolorem ut numquam ea vero sequi eligendi quidem
        cupiditate voluptatibus. Deserunt modi vel voluptatem, maiores adipisci
        dolorem. Similique."
            link="https://tiktok-clone2.vercel.app"
          />
        </div>
      </div>
    </div>
  );
}

export default Info;
