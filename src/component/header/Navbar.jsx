import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import CyberFratLogo from "../../assets/img/Cyber-Frat-Logo.png";
import { logout } from "../../redux/actions/authActions";

function Navbar() {
  const dispatch = useDispatch();
  const [toggleSidebar, setToggleSidebar] = useState("hidden");
  const handleLogOut = () => {
    dispatch(logout());
  };
  return (
    <>
      <div
      className="grid sm:grid-cols-2 lg:grid-cols-3 w-full h-auto py-4 z-10 text-white"
       style={{
          background:
            "linear-gradient(90deg, #000000 0.06%, #2f1e1e 48.99%, #990B4F 100%)",
        }}>
          <div className="lg:col-span-2">
          <img
            src={CyberFratLogo}
            alt="...."
            className="sm:inline hidden  mx-10"
            style={{ width: "220px", padding: "" }}
          />
          </div>
          <div className="lg:hidden">
          <svg
            onClick={() => {
              toggleSidebar === "hidden"
                ? setToggleSidebar("grid")
                : setToggleSidebar("hidden");
            }}
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 mx-5 float-right"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
          </div>
          <div className={`${toggleSidebar} grid-row-5 sm:grid-cols-5 sm:col-span-2 mx-5 my-2 text-center`}>
            <div className="my-1.5">
              <Link className="text-white mx-auto " to="/dashboard">
                Home
              </Link>
            </div>
            <div className="my-1.5">
              <Link className="text-white mx-auto" to="/courses">
                My Course
              </Link>
            </div>
            <div className="my-1.5">
              <Link className="text-white mx-auto" to="/allcourses">
                All Course
              </Link>
            </div>
            <div className="my-1.5">
              <Link className="text-white mx-auto" to="/profile">
                My Profile
              </Link>
            </div>
            <div className="my-1.5">
              <Link
                className="hover:text-red-500 mx-auto"
                to="/"
                onClick={handleLogOut}
              >
                Log Out
              </Link>
            </div>
          </div>
          <div className="md:grid sm:grid-cols-2 md:grid-cols-5 text-center my-auto hidden">
          <Link className="text-white mx-auto hidden sm:inline" to="/dashboard">
            Home
          </Link>
          <Link className="text-white mx-auto hidden sm:inline" to="/courses">
            My Course
          </Link>
          <Link
            className="text-white mx-auto hidden sm:inline"
            to="/allcourses"
          >
            All Course
          </Link>
          <Link className="text-white mx-auto hidden sm:inline" to="/profile">
            My Profile
          </Link>
          <Link
            className="hover:text-red-500 mx-auto hidden sm:inline"
            to="/"
            onClick={handleLogOut}
          >
            Log Out
          </Link>
        </div>
        </div>
    </>
  );
}

export default Navbar;

{/**
<div
        className="w-full h-auto py-4 z-10 text-white grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
        style={{
          background:
            "linear-gradient(90deg, #000000 0.06%, #2f1e1e 48.99%, #990B4F 100%)",
        }}
      >
        <div className="col-span-1 lg:col-span-2 ">
          <img
            src={CyberFratLogo}
            alt="...."
            className="sm:inline hidden  mx-10"
            style={{ width: "220px", padding: "" }}
          />
        </div>
        <div className="sm:hidden">
          <svg
            onClick={() => {
              toggleSidebar === "hidden"
                ? setToggleSidebar("grid")
                : setToggleSidebar("hidden");
            }}
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 mx-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
          <div className={`${toggleSidebar} grid-row-5 mx-5 my-2`}>
            <div>
              <Link className="text-white mx-auto " to="/dashboard">
                Home
              </Link>
            </div>
            <div>
              <Link className="text-white mx-auto" to="/courses">
                My Course
              </Link>
            </div>
            <div>
              <Link className="text-white mx-auto" to="/allcourses">
                All Course
              </Link>
            </div>
            <div>
              <Link className="text-white mx-auto" to="/profile">
                My Profile
              </Link>
            </div>
            <div>
              <Link
                className="hover:text-red-500 mx-auto"
                to="/"
                onClick={handleLogOut}
              >
                Log Out
              </Link>
            </div>
          </div>
        </div>
        <div className="sm:grid sm:grid-cols-2 md:grid-cols-5 text-center my-auto hidden">
          <Link className="text-white mx-auto hidden sm:inline" to="/dashboard">
            Home
          </Link>
          <Link className="text-white mx-auto hidden sm:inline" to="/courses">
            My Course
          </Link>
          <Link
            className="text-white mx-auto hidden sm:inline"
            to="/allcourses"
          >
            All Course
          </Link>
          <Link className="text-white mx-auto hidden sm:inline" to="/profile">
            My Profile
          </Link>
          <Link
            className="hover:text-red-500 mx-auto hidden sm:inline"
            to="/"
            onClick={handleLogOut}
          >
            Log Out
          </Link>
        </div>
      </div> */}