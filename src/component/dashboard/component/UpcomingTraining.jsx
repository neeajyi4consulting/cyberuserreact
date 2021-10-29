import React from "react";

const Upcomingtraining = (props) => {
  return (
    <>
      <div className="lg:grid lg:grid-cols-4 my-2">
        <div className="mx-auto">
          <img src={props.img} alt="...." className="w-28 h-28" />
        </div>
        <div className="col-span-3">
          <div className="text-gray-500 my-2 font-bold">
            <div
              className="cursor-pointer"
              onClick={() => window.open(props.link, "_blank")}
            >
              {props.title}
            </div>
          </div>
          <div className="text-gray-500">{props.about}</div>
        </div>
      </div>
    </>
  );
};

export default Upcomingtraining;
