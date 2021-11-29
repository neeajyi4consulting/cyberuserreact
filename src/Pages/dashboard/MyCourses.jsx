import React from "react";
import { Link } from "react-router-dom";

function MyCourses({ imgsrc, id, courseName, author }) {
  return (
    <>
      <div className="w-auto shadow-lg bg-white rounded-md">
        <Link to={"/courses/chaptervideo/" + id}>
          <div
            className="sm:w-full w-full h-40 rounded-t-lg mx-auto"
            style={{
              backgroundImage: `url(${imgsrc})`,
              backgroundSize: "cover",
              backgroundPosition: "center center",
            }}
          ></div>
          <div className="p-2">
            <p className="font-bold text-gray-900 mb-2 text-md font-dm">
              {" "}
              {courseName}
            </p>
            <p className="mb-0 text-sm font-satisfy">by {author}</p>
          </div>
        </Link>
      </div>
    </>
  );
}

export default MyCourses;
