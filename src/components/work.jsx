import React from "react";
function Work({ className1,image,video, description, link }) {
  return (
    <div className={className1} >
    {image && <img src={image} alt="" className='peer  w-full object-fit h-80  cursor-pointer' />} 
    {video && <video    autoPlay muted >
      <source src={video}/></video>} 
      <p id="description">
       {description}
      </p>
      <div>
        <p>Link to project : {link}</p>
      </div>
    </div>
  );
}

export default Work;
