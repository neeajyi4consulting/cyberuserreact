import React from 'react';

const Boxfooter = (props) => {
    return (
        <div>
            
            <div className="w-40 h-44 pb-2">
                <img src={props.img} alt="...." className="w-full h-40 p-2" />
                <div className="text-gray-500 text-center text-xl "><a href={props.link} target="_blank">{props.title}</a></div>
            </div>
            
        
        </div>
    );
}

export default Boxfooter;
