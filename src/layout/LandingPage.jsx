import React from "react";
import { Link } from "react-router-dom";
import Header from "../component/header/Header";
import backgroundImg from "../assets/img/background.png";
// import { fetchCategoryList, fetchPackageDetails } from "../api";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from "react-responsive-carousel";
import Landingfooter from "../component/footer/LandingFooter";

const Landingpage = () => {
//   const baseURL = "https://rupalibhargava.pythonanywhere.com";
//   const [packageList, setPackageList] = useState([]);
//   const [categoryList, setCategoryList] = useState([]);

//   const allPackage = async () => {
//     const response = await fetchPackageDetails();
//     setPackageList(response.data?.data);
//   };

//   const allCategory = async () => {
//     const response = await fetchCategoryList();
//     setCategoryList(response.data?.data);
//   };

//   useEffect(() => {
//     allPackage();
//     allCategory();
//   }, []);
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
        {/* <Carousel autoPlay interval="10000" infiniteLoop stopOnHover swipeable>
          <div>
            <img src={bannerImg1} alt="...." />
            <p className="legend">Legend 1</p>
          </div>
          <div>
            <img src={bannerImg2} alt="...." />
            <p className="legend">Legend 2</p>
          </div>
        </Carousel> */}
      </div>
      <div className="md:mx-40">
        <div className="grid grid-cols-3 gap-5 -mt-28 ">
          <div className="shadow-xl rounded-b-lg">
            <div className="bg-green-500  rounded-t-lg p-8">
              <div className=" text-white text-center p-4">
                <div className="text-xl py-2">BASIC PACK</div>
                <div className=" text-5xl">$19.99</div>
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
            <div className=" cursor-pointer text-center bg-green-500 text-white rounded-md mx-6 my-5  p-3">
              <Link to="/">SUBSCRIBE TODAY</Link>
            </div>
          </div>
          <div className="shadow-xl rounded-b-lg">
            <div className="bg-gray-500  rounded-t-lg p-8">
              <div className=" text-white text-center p-4">
                <div className="text-xl py-2">STANDARD PACK</div>
                <div className=" text-5xl ">$29.99</div>
              </div>
            </div>
            <div className="divide-y-2 divide-yellow-200 divide-solid bg-white m-3 p-5">
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
            <div className=" cursor-pointer text-center bg-gray-500 text-white rounded-md mx-6 my-5  p-3">
              <Link to="/">SUBSCRIBE TODAY</Link>
            </div>
          </div>
          <div className="shadow-xl rounded-b-lg">
            <div className="bg-yellow-600 rounded-t-lg p-8">
              <div className=" text-white text-center p-4">
                <div className="text-xl py-2">PREMIUM PACK</div>
                <div className=" text-5xl ">$39.99</div>
              </div>
            </div>
            <div className="divide-y-2 divide-yellow-200 divide-solid bg-white m-3 p-5">
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
            <div className="cursor-pointer text-center bg-yellow-600 text-white rounded-md mx-6 my-5  p-3">
              <Link to="/">SUBSCRIBE TODAY</Link>
            </div>
          </div>
        </div>
        {/* {packageList.map((val) => {
          return (
            <div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 p-5 bg-gray-500"
              key={val.id}
            >
              <div className="md:w-96 w-64">
                <img
                  src={baseURL + val.image}
                  alt="...."
                  className="w-full md:w-56 h-64"
                />
              </div>
              <div className="col-span-3 mx-3 md:py-2 md:px-5 text-gray-500 ">
                <div className="text-4xl text-black">{val.name}</div>
                <div className="my-5">{val.about}</div>
                <Link
                  to="/"
                  className="bg-blue-200 text-black py-3 px-4 rounded-lg"
                  onClick={() => toast.warn("Please Login to Purchase")}
                >
                  Buy Now
                </Link>
              </div>
            </div>
          );
        })} */}
        <div>
          {/* <div className="text-3xl text-gray-700 my-5 bg-gray-200 p-4 rounded-lg">
            Top Categories
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {categoryList.map((val) => {
              return (
                <div key={val.id} className="">
                  <Link>
                    <div>
                      <img
                        src={baseURL + val.category_image}
                        alt="...."
                        className="w-full h-full"
                      />
                    </div>
                    <div className="text-xl">{val.title}</div>
                  </Link>
                </div>
              );
            })}
          </div> */}

          <div className="max-w-screen-xl mt-24 px-8 grid gap-8 grid-cols-1 md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 py-16 mx-auto bg-gray-100 text-gray-900 rounded-lg shadow-lg">
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
