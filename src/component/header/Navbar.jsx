import React from "react";
import { Link } from "react-router-dom";
import CyberFratLogo from '../../assets/img/Cyber-Frat-Logo.png'
function Navbar() {
  return (
    <>
      <div className="w-full h-auto py-4 z-10 text-white grid grid-cols-2" style={{
          background:
            "linear-gradient(90deg, #000000 0.06%, #2f1e1e 48.99%, #990B4F 100%)",
        }}>
          <div>
          <img
                src={CyberFratLogo}
                alt="...."
                className="md:inline hidden  mx-10"
                style={{ width: "220px", padding: "" }}
              />
          </div>
          <div className="grid grid-cols-3 text-center my-auto">
            <Link to="/courses">My Course</Link>
            <Link to="/allcourses">All Course</Link>
            <Link to="/profile">My Profile</Link>
          </div>
        </div>
    </>
  );
}

export default Navbar;

{/**<div
        className="flex items-center z-10 h-auto py-6 w-full"
        style={{
          background:
            "linear-gradient(90deg, #000000 0.06%, #2f1e1e 48.99%, #990B4F 100%)",
        }}
      >
       
        <p className="md:inline  w-96 text-white hidden font-bold text-xl">
          <Link to="/dashboard">Home</Link>
        </p>
        <div className="text-white text-center w-full grid grid-cols-3">
        <Link>My Courses</Link>
          <Link>All Courses</Link>
          <Link to="/admin">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-9 w-9 inline rounded-full"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                clipRule="evenodd"
              />
            </svg> Profile
          </Link>
        </div>
      </div> */}