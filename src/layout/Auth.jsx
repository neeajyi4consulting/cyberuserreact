import React, { useState, useEffect } from "react";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
import AccountLoginImg from "../assets/img/Account-Login-img.jpg";
import CyberFratLogo from "../assets/img/Cyber-Frat-Logo.png";
// import { AuthContext } from "../context/AuthContext";
import { cleanLocalStorage } from "../utils/storage";
import { loginAction } from "../redux/actions/authActions";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { allotedPackageDetails } from "../redux/actions/courseAction";

const LoginScreen = () => {
  const history = useHistory();
  const [id, setId] = useState("neerajkumar@gmail.com");
  const [passcode, setPasscode] = useState("password");
  const currentUser = useSelector((state)=>state.user?.currentUser)
  const dispatch = useDispatch();

  const handleClick = () => {
    const data = new FormData();
    data.append("email", id);
    data.append("password", passcode);
    dispatch(loginAction(data));
    history.push("/dashboard");
    dispatch(allotedPackageDetails(currentUser?.user_id))
    // login(data)
    //   .then((response) => {
    //     toast.info(response.data.message);
    //     if (response.data.status === true) {
    //       history.push("/dashboard");
    //       window.location.reload()
    //     }
    //   })
    // .catch((error) => {
    //   console.log(error);
    // });
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
            Login to your Account
          </h1>
          <div
            className="text-md"
            style={{
              height: "23px",
              width: "351px",
            }}
          >
            {/* <p
              className="lg:text-lg py-5"
              style={{
                fontFamily: "Roboto",
                fontStyle: "normal",
                fontWeight: "normal",

                lineHeight: "23px",
                color: "#464646",
              }}
            >
              &nbsp;Don’t have an account?{" "}
              <Link
                to="/signup"
                style={{
                  position: "absolute",
                  width: "351px",
                  height: "23px",

                  lineHeight: "23px",
                  color: "#ed3237",
                }}
              >
                {" "}
                Create one here
              </Link>
            </p> */}
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
                className="py-2 px-8 rounded-md block my-8"
                style={{
                  backgroundColor: "#ED3237",
                  color: "#F2F3F6",
                  fontFamily: "Roboto",
                  fontWeight: "500",
                }}
                onClick={handleClick}

                // onClick={() => {
                //   <Redirect to="/courses" />;
                // }}
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
