import React from "react";
import profileImg from "../../assets/img/Profile-img.jpg";
import BellIcon from "../../assets/img/Beal-icon.svg";
import SearchIcon from "../../assets/img/Search-icon.svg";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <>
      <div
        className=" flex items-center z-10 h-auto py-6 w-full"
        style={{
          width: "100vw",
          background:
            "linear-gradient(90deg, #0079E2 0.06%, #4F4096 48.99%, #990B4F 100%)",
        }}
      >
        <p className="md:inline ml-80 lg:w-48 text-white hidden font-thin">
          <Link to="/dashoard">Home</Link> /{" "}
          <Link to="/dashboard">Dashboard</Link>
        </p>
        <div className="text-white text-right w-full">
          <div className="inline-block">
            <div className="shadow flex">
              <input
                className="w-96 rounded p-2 text-black hidden"
                type="text"
                placeholder="Search..."
              />              
            </div>
          </div>
          <img
            src={SearchIcon}
            alt="...."
            className="h-5 w-5 inline mx-2 lg:mr-4 lg:ml-5"
          />
          <img
            src={BellIcon}
            alt="...."
            className="h-6 w-6 inline mx-2 lg:mr-4 lg:ml-5"
          />
          <Link to="/admin">
          <img
            src={profileImg}
            alt="...."
            className="inline rounded-full mx-2 lg:mr-16 lg:ml-5"
          /></Link>
        </div>
      </div>
    </>
  );
}

export default Navbar;