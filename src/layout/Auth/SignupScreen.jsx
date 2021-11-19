import React from "react";
import AccountLoginImg from '../../assets/img/Account-Login-img.jpg'
import CyberFratLogo from '../../assets/img/Cyber-Frat-Logo.png'
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addNewUser } from "../../redux/actions/authActions";
import { toast } from "react-toastify";

function SignupScreen() {
  const dispatch = useDispatch();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [value, setValue] = useState();

  const handleSubmit = (e) => {
    const data = new FormData();
    data.append("email", userEmail);
    data.append("password", password);
    data.append("phone", value);
    data.append("first_name", firstName);
    data.append("last_name", lastName);
    if (userEmail==="" || password==="" || value==="" || firstName==="" || lastName==="" || confirmPassword==="") {
    e.preventDefault();
      toast.warning("Please Fill All Details")
    } else {
      if (password===confirmPassword) {
        dispatch(addNewUser(data));
      } else {
    e.preventDefault();
    toast.warning("Password is not same")
      }
    }
    
  };

  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 h-auto w-auto">
        <div className="relative inline-block">
          <img src={AccountLoginImg} alt="...." />
          <div className="absolute left-0 top-2/4 w-full grid justify-items-center bg-white">
            <img src={CyberFratLogo} alt="" />
          </div>
        </div>
        <div className="pt-5 mb-10 pl-10 md:py-10 lg:px-12">
          <div
            className="inline-block mr-4 largeScreen"
            style={{
              height: "35px",
              width: "6px",
              backgroundColor: "#ED3237",
            }}
          ></div>
          <h1
            className="text-2xl lg:text-5xl inline"
            style={{
              height: "59px",
              width: "491px",
              color: "#344685",
            }}
          >
            Sign Up Now
          </h1>
          <div
            className="text-md"
            style={{
              height: "23px",
              width: "351px",
            }}
          >
            <p
              className="lg:text-lg py-5"
              style={{
                fontFamily: "Roboto",
                fontStyle: "normal",
                fontWeight: "normal",

                lineHeight: "23px",
                color: "#464646",
              }}
            >
              Login Your Account &nbsp;
              <Link
                className="text-blue-500 hover:text-blue-700 hover:underline"
                to="/login"
                style={{
                  width: "351px",
                  height: "23px",

                  lineHeight: "23px",
                }}
              >
                 Click Here
              </Link>
            </p>
            <div className="" style={{ width: "500px" }}>
              <input
                type="text"
                required
                className=" lg:w-full p-2 border-b-2 my-5 focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-500 "
                style={{ fontFamily: "Roboto", fontWeight: "400" }}
                placeholder="First Name"
                value={firstName}
                onChange={(e) => {
                  setFirstName(e.target.value);
                }}
              />
              <br />
              <input
                type="text"
                required
                className="lg:w-full p-2 border-b-2 my-5 focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-500 "
                style={{ fontFamily: "Roboto", fontWeight: "400" }}
                placeholder="Last Name"
                value={lastName}
                onChange={(e) => {
                  setLastName(e.target.value);
                }}
              />
              <br />
              <input
                type="email"
                required
                className="lg:w-full p-2 border-b-2 my-5 focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-500"
                style={{ fontFamily: "Roboto", fontWeight: "400" }}
                placeholder="Your Email Address"
                value={userEmail}
                onChange={(e) => {
                  setUserEmail(e.target.value);
                }}
              />
              <br />
              <PhoneInput
                placeholder="00 11111 00000"
                className="lg:w-full p-2 border-b-2 my-5 focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-500"
                value={value}
                onChange={setValue}
              />
              <br />
              <input
                type="password"
                required
                name=""
                id=""
                className="lg:w-full p-2 border-b-2 my-5 focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-500"
                placeholder="Your Password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
              <input
                type="password"
                required
                name=""
                id=""
                className="lg:w-full p-2 border-b-2 my-5 focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-500"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => {
                  setConfirmPassword(e.target.value);
                }}
              />
              <br />
              <Link
                to="/login"
                onClick={handleSubmit}
                className="py-2 px-5 w-24 rounded-md block my-8"
                style={{
                  backgroundColor: "#ED3237",
                  color: "#F2F3F6",
                }}
              >
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignupScreen;
