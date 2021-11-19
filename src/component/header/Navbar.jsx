import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import CyberFratLogo from "../../assets/img/Cyber-Frat-Logo.png";
import { logout } from "../../redux/actions/authActions";

function Navbar() {
  const dispatch = useDispatch();
  const handleLogOut = () => {
    dispatch(logout());
  };
  return (
    <>
      <div
        className="w-full h-auto py-4 z-10 text-white grid grid-cols-3"
        style={{
          background:
            "linear-gradient(90deg, #000000 0.06%, #2f1e1e 48.99%, #990B4F 100%)",
        }}
      >
        <div className="col-span-2 ">
          <img
            src={CyberFratLogo}
            alt="...."
            className="md:inline hidden  mx-10"
            style={{ width: "220px", padding: "" }}
          />
        </div>
        <div className="grid grid-cols-5 text-center my-auto">
          <Link className="hover:text-blue-400 mx-auto" to="/dashboard">
            Home
          </Link>
          <Link className="hover:text-blue-400 mx-auto" to="/courses">
            My Course
          </Link>
          <Link className="hover:text-blue-400 mx-auto" to="/allcourses">
            All Course
          </Link>
          <Link className="hover:text-blue-400 mx-auto" to="/profile">
            My Profile
          </Link>
          <Link
            className="hover:text-red-500 mx-auto"
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
