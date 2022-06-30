import React from 'react';
function Skill({icon,name,text}) {
    return ( 
        <div className=' flex flex-col w-6/12 h-4/6'>
            <div id="titleAndIcon" className="flex  w-10/12 justify-between">
                <div className="w-21 mr-2 flex items-center justify-center  rounded-lg">{icon}</div>
                <div className="text-lg w-full font-bold ">{name}</div>
            </div>
            <div className="w-10/12">{text}</div>
        </div>
     );
}

export default Skill;