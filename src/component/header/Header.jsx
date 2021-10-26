import React from "react";
import { Link } from "react-router-dom";
import CyberFratLogo from "../../assets/img/Cyber-Frat-Logo.png";

const Header = () => {
  return (
    <div>
      <div className=" flex items-center z-10 h-auto py-1 w-full fixed bg-gray-900 bg-opacity-50">
        <p className="md:inline ml-40 lg:w-96 text-white  font-thin">
          <img src={CyberFratLogo} alt="...." style={{ width: "200px" }} />
        </p>
        <div className="text-white text-right w-full">
          <Link to="/login" className="bg-red-700 py-1 lg:py-2 px-2 lg:px-5 mr-40 rounded-lg">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
