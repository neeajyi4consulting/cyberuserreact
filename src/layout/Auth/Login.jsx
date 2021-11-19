import React, { useState, useEffect } from "react";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
import AccountLoginImg from "../../assets/img/Account-Login-img.jpg";
import CyberFratLogo from "../../assets/img/Cyber-Frat-Logo.png";
import { cleanLocalStorage } from "../../utils/storage";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { loginAction } from "../../redux/actions/authActions";
import { allotedPackageDetaile } from "../../redux/actions/courseAction";

const LoginScreen = () => {
  const history = useHistory();
  const [id, setId] = useState("neeraj@gmail.com");
  const [passcode, setPasscode] = useState("password");
  const storedData = useSelector((state) => state);
  const { user } = storedData;
  const dispatch = useDispatch();

  const handleClick = () => {
    const data = new FormData();
    data.append("email", id);
    data.append("password", passcode);
    dispatch(loginAction(data));
    history.push("/dashboard");
    dispatch(allotedPackageDetaile(user?.currentUser?.user_id));
  };

  const clearLocalStorageOnLoad = () => {
    cleanLocalStorage();
    window.localStorage.clear();
  };

  useEffect(() => {
    clearLocalStorageOnLoad();
  }, []);

  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="relative inline-block">
          <img src={AccountLoginImg} alt="...." />
          <div className="absolute left-0 top-2/4 w-full grid justify-items-center bg-white">
            <img src={CyberFratLogo} alt="...." />
          </div>
        </div>
        <div className="pt-5 mb-10 pl-10 md:py-16 lg:p-24">
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
            Login to your Account
          </h1>
          <p
            className="mt-5"
            style={{
              fontFamily: "Roboto",
              fontStyle: "normal",
              fontWeight: "normal",
              lineHeight: "23px",
              color: "#464646",
            }}
          >
            Don't have Account{" "}
            <Link
              to="/signup"
              className="text-blue-500 hover:text-blue-700 hover:underline"
            >
              SignUp
            </Link>
          </p>
          <div
            className="text-md"
            style={{
              height: "23px",
              width: "351px",
            }}
          >
            <div className="my-5" style={{ width: "500px" }}>
              <input
                type="text"
                className=" lg:w-full p-2 border-b-2 mt-16"
                style={{ fontFamily: "Roboto", fontWeight: "400" }}
                placeholder="Your Name"
                value={id}
                onChange={(e) => setId(e.target.value)}
              />
              <br />
              <input
                type="password"
                className="lg:w-full p-2 border-b-2 my-10"
                style={{ fontFamily: "Roboto", fontWeight: "400" }}
                placeholder="Your Password"
                value={passcode}
                onChange={(e) => setPasscode(e.target.value)}
              />
              <br />
              <input
                type="checkbox"
                name="Remember me"
                id=""
                className=""
                style={{ width: "20px", height: "20px" }}
              />
              <span
                className="px-2"
                style={{
                  color: "#464646",
                  fontFamily: "Roboto",
                  fontWeight: "400",
                }}
              >
                Remember Me
              </span>
              <span className="float-center lg:float-right">
                {" "}
                <Link
                  to="/forgetpassword"
                  style={{
                    color: "#344685",
                    fontFamily: "Roboto",
                    fontWeight: "400",
                  }}
                >
                  Forget Password?
                </Link>
              </span>
              <button
                type="submit"
                className="py-2 px-8 rounded-md block my-8"
                style={{
                  backgroundColor: "#ED3237",
                  color: "#F2F3F6",
                  fontFamily: "Roboto",
                  fontWeight: "500",
                }}
                onClick={handleClick}
              >
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginScreen;
