import React from "react";
import profileImg from "../../assets/img/Profile-img.jpg";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <>
      <div
        className="flex items-center z-10 h-auto py-6 w-full"
        style={{
          background:
            "linear-gradient(90deg, #000000 0.06%, #2f1e1e 48.99%, #990B4F 100%)",
        }}
      >
        <p className="md:inline ml-80 w-96 text-white hidden font-thin">
          <Link to="/dashboard">Home</Link> /{" "}
          <Link to="/dashboard">Dashboard</Link>
        </p>
        <div className="text-white text-right w-full">
          <Link to="/admin">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-9 w-9 inline rounded-full mx-2 mr-16 my-2"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                clipRule="evenodd"
              />
            </svg>
            
          </Link>
        </div>
      </div>
    </>
  );
}

export default Navbar;
