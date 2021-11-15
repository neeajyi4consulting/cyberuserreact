import React from "react";
import AccountLoginImg from "../assets/img/Account-Login-img.jpg";
import CyberFratLogo from "../assets/img/Cyber-Frat-Logo.png";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { toast } from "react-toastify";

function SignupScreen() {
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signup } = useAuth();

  const handleSubmit = () => {
    const data = new FormData();
    data.append("email", userEmail);
    data.append("password", password);
    data.append("first_name", userName);
    data.append("phone", value);
    signup(data)
      .then((response) => {
        if (response.data.status === true) {
          toast.success(response.data.message);
          console.log(response);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const [value, setValue] = useState();
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="relative inline-block">
          <img src={AccountLoginImg} alt="...." />
          <div className="absolute left-0 top-2/4 w-full grid justify-items-center bg-white">
            <img src={CyberFratLogo} alt="...." />
          </div>
        </div>
        <div className="p-5 lg:p-24">
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
              Login Your Account
              <Link
                to="/"
                style={{
                  position: "absolute",
                  width: "351px",
                  height: "23px",

                  lineHeight: "23px",
                  color: "#ed3237",
                }}
              >
                &nbsp; Click Here
              </Link>
            </p>
            <div className="my-5" style={{ width: "500px" }}>
              <input
                type="text"
                className=" lg:w-full p-2 border-b-2 my-5 focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-500 "
                style={{ fontFamily: "Roboto", fontWeight: "400" }}
                placeholder="Your Name"
                value={userName}
                onChange={(e) => {
                  setUserName(e.target.value);
                }}
              />
              <br />
              <input
                type="email"
                className="lg:w-full p-2 border-b-2 my-5"
                style={{ fontFamily: "Roboto", fontWeight: "400" }}
                placeholder="Your Email Address"
                value={userEmail}
                onChange={(e) => {
                  setUserEmail(e.target.value);
                }}
              />
              <br />
              <PhoneInput
                placeholder="9876543210"
                className="border-b-2 p-2 my-5 w-2/5 lg:w-full"
                value={value}
                onChange={setValue}
              />
              <br />
              <input
                type="password"
                name=""
                id=""
                className="border-b-2 lg:w-full p-2 my-5"
                placeholder="Your Password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
              <br />
              <button
                onClick={handleSubmit}
                className="py-2 px-5 w-24 rounded-md block my-8"
                style={{
                  backgroundColor: "#ED3237",
                  color: "#F2F3F6",
                }}
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignupScreen;
