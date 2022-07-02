import React from 'react';
import Skill from './skill';
import { CgWebsite } from "react-icons/Cg";

function Skills() {
    return ( 
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
     );
}

export default Skills;