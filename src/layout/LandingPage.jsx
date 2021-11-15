import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../component/header/Header";
import backgroundImg from "../assets/img/background.png";
import Landingfooter from "../component/footer/LandingFooter";
import { useDispatch } from "react-redux";
import { getPackage } from "../redux/actions/packageAction";
import { useSelector } from "react-redux";

const Landingpage = () => {
  const dispatch = useDispatch();
  // const baseURL = "https://rupalibhargava.pythonanywhere.com";
  const { course } = useSelector((state)=>state);
  const packageList =useSelector((state=>state.package?.packageDetails)) 
  const loading = course?.loading;
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
          &nbsp;&nbsp;&nbsp;please wait <br/> this may take a few seconds
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
        <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-5 -mt-28 ">
          {packageList !== undefined
            ? packageList.map((val) => {
                return (
                  <div className="shadow-xl rounded-b-lg mx-5" key={val.id}>
                    <div className="bg-green-500  rounded-t-lg p-8 h-56">
                      <div className=" text-white text-center p-4">
                        <div className="text-xl py-2">{val?.name}</div>
                        <div className=" text-5xl">${val?.price}</div>
                      </div>
                    </div>
                    <div className="divide-y-2 divide-yellow-200 divide-solid  bg-white m-3 p-5">
                      <div className="py-4 text-green-500">
                        Unlimited <span className="text-gray-700">Access</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6 text-green-500 inline-block float-right"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      <div className="py-4 text-green-500">
                        Montly <span className="text-gray-700">Documents</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6 inline-block text-red-500 float-right"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </div>
                      <div className="py-4 text-green-500">
                        Unlimited <span className="text-gray-700">Domains</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6 text-green-500 inline-block float-right"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      <div className="py-4 text-green-500">
                        Custom <span className="text-gray-700">Hoisting</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6 inline-block text-red-500 float-right"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </div>
                      <div className="py-4 text-green-500">
                        24/7 <span className="text-gray-700">support</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6 text-green-500 inline-block float-right"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                    </div>
                    <a href={val?.payment_link}
                      target="_blank" rel="noopener noreferrer">
                    <div className=" cursor-pointer text-center bg-green-500 text-white rounded-md mx-6 my-5  p-3">
                     SUBSCRIBE TODAY
                    </div>
                    </a>
                  </div>
                );
              })
            : null}
        </div>
        <div>
          <div className="max-w-screen-xl mt-24 mb-20 px-8 grid gap-8 grid-cols-1 md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 py-16 mx-auto bg-gray-100 text-gray-900 rounded-lg shadow-lg">
            <div className="flex flex-col ">
              <div>
                <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
                  Lets talk about everything!
                </h2>
                <div className="text-gray-700 mt-8">
                  Hate forms? Send us an{" "}
                  <span className="underline cursor-pointer">email</span>{" "}
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
                  Full Name
                </span>
                <input
                  className="w-full bg-white text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                  type="text"
                  placeholder=""
                />
              </div>
              <div className="mt-8">
                <span className="uppercase text-sm text-gray-600 font-bold">
                  Email
                </span>
                <input
                  className="w-full bg-white text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                  type="text"
                />
              </div>
              <div className="mt-8">
                <span className="uppercase text-sm text-gray-600 font-bold">
                  Message
                </span>
                <textarea className="w-full h-32 bg-white text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"></textarea>
              </div>
              <div className="mt-8">
                <button className="uppercase text-sm font-bold tracking-wide bg-indigo-500 text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline">
                  Send Message
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
