import React, { useEffect, useState } from "react";
import CyberFratLogo from "../../assets/img/Cyber-Frat-Logo.png";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import DashboardIcon from "../../assets/img/Dashboard-icon.svg";
import CoursesIcon from "../../assets/img/Courses-icon.svg";
import ProfileIcon from "../../assets/img/My-Profile-icon.svg";
import LogoutIcon from "../../assets/img/Logout-icon.svg";
import { logout } from "../../redux/actions/authActions";
import { useHistory } from "react-router-dom";

function Sidebar({selectedValue}) {
  const history = useHistory();
  const dispatch = useDispatch();
  const [dashboardClass, setDashboardClass] = useState("");
  const [coursesClass, setCoursesClass] = useState("");
  const [profileClass, setProfileClass] = useState("");
  const [toggleSidebar, setToggleSidebar] = useState("hidden");

  const selectedClass = () => {
    switch (selectedValue) {
      case "dashboard":
        setCoursesClass("text-gray-500");
        setDashboardClass("text-gray-700 bg-gray-300");
        setProfileClass("text-gray-500");
        break;
      case "profile":
        setCoursesClass("text-gray-500");
        setProfileClass("text-gray-700 bg-gray-300");
        setDashboardClass("text-gray-500");
        break;

      default:
        setCoursesClass("text-gray-700 bg-gray-300");
        setDashboardClass("text-gray-500");
        setProfileClass("text-gray-500");

        break;
    }
  };

  const handleLogOut = () => {
    dispatch(logout());
    history.push("/");
  };

  useEffect(() => {
    selectedClass();
  });

  return (
    <>
      <nav className="-mt-24 z-10 shadow-lg">
        <div className="">
          <div className={`flex flex-wrap w-72 lg:inline-block`}>
            <div className="w-20 md:w-full h-auto py-6 ">
              <button
                onClick={() => {
                  toggleSidebar === "hidden"
                    ? setToggleSidebar("")
                    : setToggleSidebar("hidden");
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10 text-white mx-3 inline"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
              <img
                src={CyberFratLogo}
                alt="...."
                className="md:inline hidden "
                style={{ width: "220px", padding: "" }}
              />
            </div>
            <div
              className={`${toggleSidebar} bg-white h-screen shadow-lg absolute lg:top-24 md:top-24 md:mt-1 sm:mt-1 mt-3 top-20 left-0 z-10`}
            >
              <Link to="/dashboard">
                <div className={`w-full px-10 h-auto py-5 ${dashboardClass}`}>
                  <img
                    src={DashboardIcon}
                    alt="...."
                    className="inline w-6 h-6 mr-2"
                  />
                  Dashboard
                </div>
              </Link>

              <Link to="/courses">
                <div className={`px-10 w-72 h-auto py-5 ${coursesClass}`}>
                  <img
                    src={CoursesIcon}
                    alt="...."
                    className="inline w-6 h-6 mr-2"
                  />
                  Courses
                </div>
              </Link>
              <Link to="/admin">
                <div className={`px-10 w-72 py-5 h-auto ${profileClass} `}>
                  <img
                    src={ProfileIcon}
                    alt="...."
                    className="inline w-6 h-6 mr-2"
                  />
                  My Profile
                </div>
              </Link>
              <div
                className="px-10 w-72 py-5 h-auto"
                style={{ backgroundColor: "white", color: "#868686" }}
              >
                <button onClick={handleLogOut}>
                  <img
                    src={LogoutIcon}
                    alt="...."
                    className="inline w-6 h-6 mr-2"
                  />
                  Logout
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Sidebar;
