import React from "react";
import { Link } from "react-router-dom";

function MyCourses(props) {
  return (
    <>
      <div className="w-auto mx-4 shadow-lg bg-white rounded-md my-2">
        <img src={props.imgsrc} alt="abcadfas" className="w-full h-32 rounded-t-md" />
        <div className="p-2">
          <p className="font-bold text-gray-900 mb-2 text-sm"><Link to={"/courses/chaptervideo/" + props.id}> {props.courseName}</Link></p>
          {/* <div className="relative bg-gray-200 mt-4">
            <div className="overflow-hidden h-1 w-28  text-xs flex rounded bg-gray-200">
              <div
                style={{ width: `${props.progress}` }}
                className=" flex flex-col text-center z-0 text-white bg-blue-500"
              ></div>
            </div>
          </div> */}
          <p className="mb-4 text-xs">
            Total Hours for This Course: {props.totalTime} 
          </p>
        </div>
      </div>
    </>
  );
}

export default MyCourses;
