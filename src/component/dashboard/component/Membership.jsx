import React from "react";

const Membership = (props) => {
  return (
    <div>
      <div className="bg-blue-500 text-white h-20 text-sm rounded-lg my-5 p-3 inline-block w-full">
        <div className="inline-block ml-3">
          <p className="text-lg">{props.name}</p>
          <p>${props.price} per Month</p>
        </div>
        <button onClick={()=>alert("button not working")} className="bg-white text-black p-2 rounded-full font-bold inline-block float-right">
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default Membership;
