import React from "react";
import { Link } from "react-router-dom";

function MyCourses({imgsrc, id, courseName, author}) {
  return (
    <>
      <div className="w-auto mx-4 shadow-lg bg-white rounded-md my-2">
        <div className="w-full h-40 rounded-t-md" style={{backgroundImage:`url(${imgsrc})`, backgroundSize:"cover", backgroundPosition:"center center"}}></div>
        <div className="p-2">
          <p className="font-bold text-gray-900 mb-2 text-sm">
            <Link to={"/courses/chaptervideo/" + id}>
              {" "}
              {courseName}
            </Link>
          </p>
          <p className="mb-0 text-xs">
            by {author}
          </p>
        </div>
      </div>
    </>
  );
}

export default MyCourses;
