import React from "react";
import profileImg from "../Assets/Profile-img.jpg";
import { Link } from "react-router-dom";

function Invoice() {
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
              to="/generalprofile"
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
              className="md:mr-10 md:mx-10 md:pt-10 pt-5 md:inline-block block border-b-2 border-blue-500 text-blue-500"
            >
              Invoice
            </Link>
            <Link
              to="/profile/myaddress"
              className="md:mx-10 md:pt-10 pt-5 md:inline-block block"
            >
              My Address
            </Link>
          </div>
          <div className="border-2 p-5 mt-10">
            <div>
              <p className="text-gray-500 text-sm pt-10">Account Name</p>
              <span className="text-blue-500 float-right">Edit</span>
              <p className="border-b-2 py-5 w-full">Mahesh Kumar </p>
            </div>
            <div>
              <p className="text-gray-500 text-sm pt-10">Email</p>
              <span className="text-blue-500 float-right">Edit</span>
              <p className="border-b-2 py-5 w-full">mowglikdh@gmail.com</p>
            </div>
            <div className="border-b-2 mb-5">
              <p className="text-gray-500 text-sm pt-10">Contact Number</p>
              <span className="text-blue-500 float-right">Edit</span>
              <p className="border-b-1 py-5 w-full">+91968736584</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Invoice;
