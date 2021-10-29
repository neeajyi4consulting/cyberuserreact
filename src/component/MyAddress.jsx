import React from "react";
import profileImg from "../assets/img/Profile-img.jpg";
import { Link } from "react-router-dom";

function MyAddress() {
  return (
    <>
      <div className="bg-gray-200 pt-24 ">
        <div className="bg-white px-5 py-3 mx-16 rounded-lg hidden md:block">
          <span className="font-bold text-2xl mx-8">Profile</span>
          <span className="float-right ">Home / Dashboard / ChapterQUiz</span>
        </div>
        <div className="mt-5 md:mx-16 rounded-md bg-white p-10 pb-20">
          <img src={profileImg} alt="...." className="w-16 inline-block" />
          <span className="md:ml-5 text-xl">Mahesh Kumar</span>
          <span className="float-right text-red-500">
            <Link to="/">Sign Out</Link>
          </span>
          <div>
            <Link
              to="/admin"
              className="md:mx-10 md:pt-10 pt-5 md:inline-block block"
            >
              General
            </Link>
            <Link
              to="/profile/preferance"
              className="md:mx-10 md:pt-10 pt-5 md:inline-block block"
            >
              Preferance
            </Link>
            <Link
              to="/profile/invoice"
              className="md:mx-10 md:pt-10 pt-5 md:inline-block block"
            >
              Invoice
            </Link>
            <Link
              to="/profile/myaddress"
              className="md:mr-10 md:mx-10 md:pt-10 pt-5 md:inline-block block border-b-2 border-blue-500 text-blue-500"
            >
              My Address
            </Link>
          </div>
          <div className="border-2 p-5 mt-10">
            <div>
              <p className="text-gray-500 text-sm pt-10">Nationality</p>
              <span className="text-blue-500 float-right">Edit</span>
              <p className="border-b-2 py-5 w-full">Indian</p>
            </div>
            <div>
              <p className="text-gray-500 text-sm pt-10">Pin Code</p>
              <span className="text-blue-500 float-right">Edit</span>
              <p className="border-b-2 py-5 w-full">123456</p>
            </div>
            <div className="border-b-2 mb-5">
              <p className="text-gray-500 text-sm pt-10">Address</p>
              <span className="text-blue-500 float-right">Edit</span>
              <p className="border-b-1 py-5 w-full">123, Town, City, State</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MyAddress;
