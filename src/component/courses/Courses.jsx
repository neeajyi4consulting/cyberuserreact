import React from "react";
import EnrolledCourses from "./component/EnrolledCourses";
import Sidebar from "../sidebar/Sidebar";

function Courses() {
  return (
    <>
      <Sidebar />
      <div className="z-20  p-5 bg-gray-200">
        <div className="py-5 text-xl font-bold text-gray-700">
          Enrolled Courses
        </div>
        <div className="grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 grid-cols-1">
          <EnrolledCourses />
        </div>
      </div>
    </>
  );
}

export default Courses;
