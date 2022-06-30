import React from "react";
import { BsGithub, BsLinkedin, BsTwitter } from "react-icons/Bs";
function Contacts(){
    return (
  <div className='flex flex-col h-56 mt-auto  justify-around'>
    <div>
     <a href='https://www.linkedin.com/in/m-apotre-2627b6225/'><BsLinkedin className="text-4xl" /></a> 
    </div>
    <div>
      <a href='https://github.com/Hallcoder'><BsGithub className="text-4xl" /></a>
    </div>
    <div>
      <BsTwitter className="text-4xl" />
    </div>
  </div>
   )
}
export default Contacts;
