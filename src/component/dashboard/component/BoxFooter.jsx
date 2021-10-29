import React from "react";

const Boxfooter = (props) => {
  return (
    <div>
      <div className="w-40 h-44 pb-2">
        <img src={props.img} alt="...." className="w-full h-40 p-2" />
        <div
          className="cursor-pointer text-gray-500 text-center text-xl"
          onClick={() => window.open(props.link, "_blank")}
        >
          {props.title}
        </div>
      </div>
    </div>
  );
};

export default Boxfooter;
