import React from "react";
import { Link } from "react-router-dom";
import CyberFratLogo from '../../assets/img/Cyber-Frat-Logo.png'

const Landingfooter = () => {
  return (
    <div className="bg-black">
      <link
        rel="stylesheet"
        href="https://use.fontawesome.com/releases/v5.11.2/css/all.css"
      />
      <footer className="text-white bg-black body-font ">
        <div className="container py-24 flex md:px-20 lg:px-40 md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
          <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
            <Link
              to=""
              className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900"
            >
              <span className="ml-3 text-xl text-gray-200">
                <img src={CyberFratLogo} alt="...." />
              </span>
            </Link>
            <p className="mt-2 text-sm text-gray-400">
              CyberFrat is an enterprise risk management services company with a
              special focus on Cyber Security, Risk Management, and Emerging
              Technologies
            </p>
          </div>

          <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-gray-200 tracking-widest text-sm mb-3">
                CATEGORIES
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <Link to="" className="text-gray-500 hover:text-gray-100 hover:underline">
                    First Link
                  </Link>
                </li>
                <li>
                  <Link to="" className="text-gray-500 hover:text-gray-100 hover:underline">
                    Second Link
                  </Link>
                </li>
                <li>
                  <Link to="" className="text-gray-500 hover:text-gray-100 hover:underline">
                    Third Link
                  </Link>
                </li>
                <li>
                  <Link to="" className="text-gray-500 hover:text-gray-100 hover:underline">
                    Fourth Link
                  </Link>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-gray-200 tracking-widest text-sm mb-3">
                CATEGORIES
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <Link to="" className="text-gray-500 hover:text-gray-100 hover:underline">
                    First Link
                  </Link>
                </li>
                <li>
                  <Link to="" className="text-gray-500 hover:text-gray-100 hover:underline">
                    Second Link
                  </Link>
                </li>
                <li>
                  <Link to="" className="text-gray-500 hover:text-gray-100 hover:underline">
                    Third Link
                  </Link>
                </li>
                <li>
                  <Link to="" className="text-gray-500 hover:text-gray-100 hover:underline">
                    Fourth Link
                  </Link>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-gray-200 tracking-widest text-sm mb-3">
                CATEGORIES
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <Link to="" className="text-gray-500 hover:text-gray-100 hover:underline">
                    First Link
                  </Link>
                </li>
                <li>
                  <Link to="" className="text-gray-500 hover:text-gray-100 hover:underline">
                    Second Link
                  </Link>
                </li>
                <li>
                  <Link to="" className="text-gray-500 hover:text-gray-100 hover:underline">
                    Third Link
                  </Link>
                </li>
                <li>
                  <Link to="" className="text-gray-500 hover:text-gray-100 hover:underline">
                    Fourth Link
                  </Link>
                </li>
              </nav>
            </div>
          </div>
        </div>
        <div className="bg-gray-100 px-40">
          <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
            <p className="text-gray-500 text-sm text-center sm:text-left">
              Copyright © 2021
              <span className="text-gray-600 ml-1"> <a href="https://cyberfrat.com/" target="_blank">CyberFrat</a></span>
            </p>
            <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
              <a target="_blank" href="https://www.facebook.com/CyberFrat/" className="text-gray-500 border-2 border-gray-500 rounded-full px-1.5">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a target="_blank" href="https://www.twitter.com/cyberfrat" className="ml-3 text-gray-500 border-2 border-gray-500 rounded-full px-1">
                <i className="fab fa-twitter"></i>
              </a>
              <a target="_blank" href="https://www.youtube.com/cyberfrat" className="ml-3 text-gray-500 border-2 border-gray-500 rounded-full px-1">
              <i class="fab fa-youtube"></i>
              </a>
              <a target="_blank" href="https://www.linkedin.com/company/cyberfrat" className="ml-3 text-gray-500 border-2 border-gray-500 rounded-full px-1">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a target="_blank" href="https://www.instagram.com/cyberfrat" className="ml-3 text-gray-500 border-2 border-gray-500 rounded-full px-1">
                <i className="fab fa-instagram"></i>
              </a>
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landingfooter;
