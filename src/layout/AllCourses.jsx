import React from "react";
import { Link } from "react-router-dom";
import ShowAllCourses from "../Pages/ShowAllCourses";

function AllCourses() {
  return (
    <>
      <div className="z-20  p-5 bg-gray-200">
        <div className="bg-white p-5 rounded-lg shadow-lg mt-6">
          <div className="text-xl font-bold text-gray-700 bg-white pb-3">
            All Courses
            <Link className="bg-blue-500 rounded-lg float-right text-white px-4 py-1 font-thin text-lg">
              Buy Package
            </Link>
          </div>
          <div className="grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 grid-cols-1">
            <ShowAllCourses />
          </div>
        </div>
      </div>
    </>
  );
}

export default AllCourses;
