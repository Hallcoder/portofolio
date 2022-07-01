import React from "react";
import { BsGithub, BsLinkedin, BsTwitter } from "react-icons/Bs";
function Contacts(){
    return (
  <div className='flex flex-col h-64  mt-auto  justify-between'>
    <div id="line" className="z-index"></div>
    <div id="line" className="z-index1"></div>
    <div>
     <a className="inline-block" href='https://www.linkedin.com/in/m-apotre-2627b6225/'><BsLinkedin className="text-4xl" /></a> 
    </div>
    <div>
      <a className="inline-block" href='https://github.com/Hallcoder'><BsGithub className="text-4xl" /></a>
    </div>
    <div>
      <a className='inline-block' href='https://twitter.com/c_zesta'><BsTwitter className="text-4xl" /></a>
    </div>
  </div>
   )
}
export default Contacts;
