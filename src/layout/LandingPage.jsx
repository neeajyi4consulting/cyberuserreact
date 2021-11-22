import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../component/header/Header";
import backgroundImg from "../assets/img/background.png";
import Landingfooter from "../component/footer/LandingFooter";
import { useDispatch } from "react-redux";
import { addQueries, getPackage } from "../redux/actions/packageAction";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

const Landingpage = () => {
  const dispatch = useDispatch();
  const baseURL = "https://rupalibhargava.pythonanywhere.com";
  const { course, packages } = useSelector((state) => state);
  const packageList = packages?.packageDetails;
  const loading = course?.loading;
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleQuaries = () => {
    const data = new FormData();
    data.append("email", email);
    data.append("subject", subject);
    data.append("content", message);
    if (email === "" || subject === "" || message === "") {
      toast.warning("Please Fill all details");
    } else {
      dispatch(addQueries(data));
      setEmail("");
      setSubject("");
      setMessage("");
    }
  };

  useEffect(() => {
    dispatch(getPackage());
  }, []);
  if (loading) {
    return (
      <div className="absolute bottom-0 left-0 z-40 text-center bg-gray-900 opacity-90 h-screen w-screen">
        <div className="my-auto mx-auto h-32 w-32 mt-64">
          <div className="h-28 w-28 border-blue-400 rounded-full animate-spin border-t-2 p-4">
            <div className="h-24 w-24 border-blue-400 rounded-full animate-spin border-t-2 p-4">
              <div className="h-20 w-20 border-blue-400 rounded-full animate-spin border-t-2">
                <div className="h-16 w-16 border-blue-400 rounded-full animate-spin border-t-2"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="h-32 w-64 mx-auto text-gray-50 mt-4 text-center">
          &nbsp;&nbsp;&nbsp;please wait <br /> this may take a few seconds
        </div>
      </div>
    );
  }
  return (
    <>
      <Header />
      <div>
        <div
          className="w-full flex flex-wrap content-center"
          style={{ height: "600px", backgroundImage: `url(${backgroundImg})` }}
        >
          <div className=" text-white text-xl font-bold text-center w-full">
            CyberFrat - A Tech Fraternity
          </div>
          <div className=" text-white text-5xl font-bold text-center w-full my-5">
            Lorem ipsum dolor sit, amet consectetur <br />
            adipisicing elit.
          </div>
          <div className="text-white text-xl text-center w-full my-5">
            <Link to="/login" className=" py-3 px-5  bg-red-700 rounded-lg">
              Become a Member
            </Link>
          </div>
        </div>
      </div>
      <div className="md:mx-20 lg:40 ">
        <div className="grid md:grid-cols-2  grid-cols-1 gap-16 mt-5">
          {packageList !== undefined
            ? packageList.map((val) => {
                return (
                  <div
                    key={val.id}
                    className="flex justify-center items-center my-10 h-auto bg-blue-lightest"
                  >
                    <div
                      style={{}}
                      className="bg-white w-full h-60 rounded-lg shadow-md flex card text-grey-darkest"
                    >
                      <img
                        className="w-1/2 h-full rounded-l-lg bg-auto object-cover"
                        src={baseURL + val.image}
                        alt="PackageImage"
                      />
                      <div className="w-full flex flex-col">
                        <div className="p-4 pb-0 flex-1">
                          <h3 className="font-light mb-1 text-grey-darkest">
                            {val.name}
                          </h3>
                          <span className="text-5xl text-grey-darkest">
                            {" "}
                            &#8377; {val.price}
                            <span className="text-lg">/M</span>
                          </span>
                          <div className="flex items-center mt-4">
                            <div className="pr-2 text-xs">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 inline"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={1}
                                  d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                                />
                              </svg>{" "}
                              Free Test
                            </div>
                          </div>
                        </div>
                        <Link to="/">
                          <div className="bg-grey-lighter p-3 flex items-center justify-between transition hover:bg-grey-light">
                            Purchase Now
                            <i className="fas fa-chevron-right"></i>
                          </div>
                        </Link>
                      </div>
                    </div>
                    
                  </div>
                );
              })
            : null}
        </div>
        <div>
          <div className="max-w-screen-xl mt-12 mb-20 px-8 grid gap-8 grid-cols-1 md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 py-16 mx-auto bg-gray-100 text-gray-900 rounded-lg shadow-lg">
            <div className="flex flex-col ">
              <div>
                <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
                  Lets talk about everything!
                </h2>
                <div className="text-gray-700 mt-8">
                  Hate forms? Send us an{" "}
                  <a
                    href="mailto:test@gmail.com?subject=My custom mail subject"
                    className="underline cursor-pointer"
                  >
                    email
                  </a>{" "}
                  instead.
                </div>
              </div>
              <div className=" mt-5 text-left">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. A iste
                expedita nostrum quos, unde ullam libero obcaecati natus
                cupiditate inventore necessitatibus rerum autem quod illo
                quisquam sapiente et! Qui quia quos inventore vitae? Minima
                perspiciatis ratione sed suscipit aliquid, explicabo nulla
                excepturi harum et magnam corrupti cupiditate iusto amet quam.
              </div>
            </div>
            <div className="">
              <div>
                <span className="uppercase text-sm text-gray-600 font-bold">
                  Email
                </span>
                <input
                  className="w-full bg-white text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                  type="email"
                  placeholder=""
                  required
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </div>
              <div className="mt-8">
                <span className="uppercase text-sm text-gray-600 font-bold">
                  Subject
                </span>
                <input
                  className="w-full bg-white text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                  type="text"
                  required
                  value={subject}
                  onChange={(e) => {
                    setSubject(e.target.value);
                  }}
                />
              </div>
              <div className="mt-8">
                <span className="uppercase text-sm text-gray-600 font-bold">
                  Message
                </span>
                <textarea
                  value={message}
                  required
                  onChange={(e) => {
                    setMessage(e.target.value);
                  }}
                  className="w-full h-32 bg-white text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                ></textarea>
              </div>
              <div className="mt-8">
                <button
                  onClick={handleQuaries}
                  type="submit"
                  className="uppercase text-sm font-bold tracking-wide bg-indigo-500 text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline"
                >
                  Send Query or Feedback
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Landingfooter />
    </>
  );
};

export default Landingpage;
