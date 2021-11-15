import React from "react";
import { Link } from "react-router-dom";
import CyberFratLogo from "../../assets/img/Cyber-Frat-Logo.png";

const Header = () => {
  return (
    <div>
      <div className=" flex items-center z-10 h-auto py-1 w-full fixed bg-gray-900 bg-opacity-50">
        <p className="md:inline md:ml-40 md:w-96 text-white  font-thin">
          <img src={CyberFratLogo} alt="...." className="h-auto" style={{ width: "200px" }} />
        </p>
        <div className="text-white text-right w-full my-5">
          <Link
            to="/login"
            className="bg-red-700 py-1 lg:py-2 px-2 lg:px-5 lg:mr-40 rounded-lg mr-5"
          >
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
