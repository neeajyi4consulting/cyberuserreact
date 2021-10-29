import React from "react";

function AboutCourse() {
  return (
    <>
      <div className="bg-gray-200 pt-24" style={{ height: "155vh" }}>
        <div className="bg-white px-5 py-3 mx-16 rounded-lg hidden md:block">
          <span className="font-bold text-2xl mx-8">Course Details</span>
          <span className="float-right ">
            Home / Dashboard / Course Details
          </span>
        </div>
        <div className="md:ml-16 ml-5 mt-5">
          <img
            src="https://images.unsplash.com/photo-1603290989063-b255b11b2525?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHJhbmRvbXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80"
            alt="...."
            className="w-72 rounded-t-md"
          />
          <div className="text-center py-4 bg-white w-72 rounded-b-md">
            Why is Early Education Essential
          </div>
        </div>
        <div className="md:ml-16 ml-5 w-72 mt-5 bg-white rounded-md h-96">
          <div className="p-3">About Courses</div>
          <div className="px-3 pb-3 text-gray-500">
            Lorem, ipsum dolor sit amet consectetur elit. Laborum at veniam quas
            explicabo iure soluta debitis.
          </div>
          <div className="border-b-2 py-3">
            <span className="p-3 text-gray-800">Duration</span>
            <span className="px-5 text-gray-500 text-sm float-right ">
              8 Hours
            </span>
          </div>
          <div className="border-b-2 py-3">
            <span className="p-3 text-gray-800">Enrolled Date</span>
            <span className="px-5 text-gray-500 text-sm float-right ">
              31 August 2021
            </span>
          </div>
        </div>
        <div className="bg-white rounded-md md:absolute md:top-40 md:left-96 mt-3 md:mr-16">
          <p className="text-lg font-bold text-blue-700 p-4 pt-5">
            What You will learn
          </p>
          <p className="text-gray-500 px-5 py-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident,
          </p>
          <p className="text-gray-500 px-5 py-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <p className="text-lg font-bold text-blue-700 p-4">
            Course Description
          </p>
          <p className="text-gray-500 px-5 py-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident,
          </p>
          <p className="text-gray-500 px-5 py-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <p className="text-lg font-bold text-blue-700 p-4">
            Who this course is for
          </p>
          <p className="text-gray-500 px-5 py-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident,
          </p>
          <p className="text-gray-500 px-5 py-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <p className="text-lg font-bold text-blue-700 p-4">Course Content</p>
          <p className="text-gray-500 px-5 py-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident,
          </p>
          <button className="bg-red-500 rounded-md m-4 my-6 py-2 text-white px-4">
            Continue with Course
          </button>
        </div>
      </div>
    </>
  );
}

export default AboutCourse;
