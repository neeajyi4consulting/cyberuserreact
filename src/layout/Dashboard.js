import React, { useEffect, useState } from "react";
import MyCourses from "../Pages/dashboard/MyCourses";
import Events from "../Pages/dashboard/Events";
import Services from "../Pages/dashboard/Events";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { useDispatch, useSelector } from "react-redux";
import { getPackage } from "../redux/actions/packageAction";
import {
  fetchPackageDetails,
  getBannerList,
  getEventList,
  getServiceList,
} from "../api";
import { Link } from "react-router-dom";
import { allotedPackageDetaile } from "../redux/actions/courseAction";

const Dashboard = () => {
  const [packageInfo, setPackageInfo] = useState([]);
  const dispatch = useDispatch();
  const storedData = useSelector((state) => state);
  const { user, course, packages } = storedData;
  const loading = course?.loading;
  const currentUser = user?.currentUser;
  const courseInfo = course?.allotedPackageDetails;
  const packageList = packages?.packageDetails
  // console.log("this is test package", packageList);
  const baseURL = "https://rupalibhargava.pythonanywhere.com";
  const [event, setEvent] = useState([]);
  const [services, setServices] = useState([]);
  const [bannerDetails, setBannerDetails] = useState([]);

  const fetchExtraDetails = async () => {
    setEvent(await (await getEventList()).data?.data);
    setServices(await (await getServiceList()).data?.data);
    setBannerDetails(await (await getBannerList()).data?.data);
    await fetchPackageDetails().then((response) => {
      setPackageInfo(response.data?.data);
    });
  };

  // const test =
  //   packageList === undefined ? null : packageList.map((val) => {
  //     return (
  //       <div className="shadow-xl rounded-b-lg mx-5" key={val.id}>
  //         <div className="bg-green-500  rounded-t-lg p-8 h-56">
  //           <div className=" text-white text-center p-4">
  //             <div className="text-xl py-2">{val?.name}</div>
  //             <div className=" text-5xl">${val?.price}</div>
  //           </div>
  //         </div>
  //         <div className="divide-y-2 divide-yellow-200 divide-solid  bg-white m-3 p-5">
  //           <div className="py-4 text-green-500">
  //             Unlimited <span className="text-gray-700">Access</span>
  //             <svg
  //               xmlns="http://www.w3.org/2000/svg"
  //               className="h-6 w-6 text-green-500 inline-block float-right"
  //               fill="none"
  //               viewBox="0 0 24 24"
  //               stroke="currentColor"
  //             >
  //               <path
  //                 strokeLinecap="round"
  //                 strokeLinejoin="round"
  //                 strokeWidth={2}
  //                 d="M5 13l4 4L19 7"
  //               />
  //             </svg>
  //           </div>
  //           <div className="py-4 text-green-500">
  //             Montly <span className="text-gray-700">Documents</span>
  //             <svg
  //               xmlns="http://www.w3.org/2000/svg"
  //               className="h-6 w-6 inline-block text-red-500 float-right"
  //               fill="none"
  //               viewBox="0 0 24 24"
  //               stroke="currentColor"
  //             >
  //               <path
  //                 strokeLinecap="round"
  //                 strokeLinejoin="round"
  //                 strokeWidth={2}
  //                 d="M6 18L18 6M6 6l12 12"
  //               />
  //             </svg>
  //           </div>
  //           <div className="py-4 text-green-500">
  //             Unlimited <span className="text-gray-700">Domains</span>
  //             <svg
  //               xmlns="http://www.w3.org/2000/svg"
  //               className="h-6 w-6 text-green-500 inline-block float-right"
  //               fill="none"
  //               viewBox="0 0 24 24"
  //               stroke="currentColor"
  //             >
  //               <path
  //                 strokeLinecap="round"
  //                 strokeLinejoin="round"
  //                 strokeWidth={2}
  //                 d="M5 13l4 4L19 7"
  //               />
  //             </svg>
  //           </div>
  //           <div className="py-4 text-green-500">
  //             Custom <span className="text-gray-700">Hoisting</span>
  //             <svg
  //               xmlns="http://www.w3.org/2000/svg"
  //               className="h-6 w-6 inline-block text-red-500 float-right"
  //               fill="none"
  //               viewBox="0 0 24 24"
  //               stroke="currentColor"
  //             >
  //               <path
  //                 strokeLinecap="round"
  //                 strokeLinejoin="round"
  //                 strokeWidth={2}
  //                 d="M6 18L18 6M6 6l12 12"
  //               />
  //             </svg>
  //           </div>
  //           <div className="py-4 text-green-500">
  //             24/7 <span className="text-gray-700">support</span>
  //             <svg
  //               xmlns="http://www.w3.org/2000/svg"
  //               className="h-6 w-6 text-green-500 inline-block float-right"
  //               fill="none"
  //               viewBox="0 0 24 24"
  //               stroke="currentColor"
  //             >
  //               <path
  //                 strokeLinecap="round"
  //                 strokeLinejoin="round"
  //                 strokeWidth={2}
  //                 d="M5 13l4 4L19 7"
  //               />
  //             </svg>
  //           </div>
  //         </div>
  //         <a href={val?.payment_link}
  //           target="_blank" rel="noopener noreferrer">
  //         <div className=" cursor-pointer text-center bg-green-500 text-white rounded-md mx-6 my-5  p-3">
  //          SUBSCRIBE TODAY
  //         </div>
  //         </a>
  //       </div>
  //     );
  //   })

  useEffect(() => {
    dispatch(getPackage());
    fetchExtraDetails();
  }, []);

  useEffect(() => {
    dispatch(allotedPackageDetaile(currentUser?.user_id));
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
      {/* <Sidebar selectedValue="dashboard" /> */}
      <div className="px-5 pt-5 bg-gray-200">
        <div className="pb-5 text-xl font-bold text-gray-700">Dashboard</div>
        <div className="relative w-full hidden md:block">
          <Carousel
            autoPlay
            interval="5000"
            infiniteLoop
            stopOnHover
            // centerMode
            // centerSlidePercentage="90"
            showIndicators={false}
            showStatus={false}
            showThumbs={false}
          >
            {bannerDetails.map((val) => {
              return (
                <div key={val.id}>
                  <a href={val.link} target="_blank" rel="noopener noreferrer">
                    <img
                      src={baseURL + val.image}
                      alt="...."
                      className="w-full h-96 cursor-pointer rounded-lg"
                    />
                  </a>
                </div>
              );
            })}
          </Carousel>
        </div>
        {false ? (
          <div className="grid-cols-2 grid">
          {test}</div>
        ) : (
          <div className="grid grid-rows-2 mt-6">
            <div className="">
              <div className="bg-white p-4 w-full rounded-lg shadow-lg">
                <div className="mx-3 mb-4 text-2xl text-gray-700 font-bold">
                  <Link to="/courses">My Courses</Link>
                </div>
                <div className="grid sm:grid-cols-2 md:grid-cols-5 grid-cols-1 gap-4">
                  {courseInfo?.map((val) => {
                    return (
                      <MyCourses
                        key={val?.course_name?.id}
                        imgsrc={baseURL + val?.course_name?.course_file}
                        courseName={val?.course_name?.course_title}
                        author={val?.course_name?.author}
                        id={val?.course_name?.id}
                      />
                    );
                  })}
                </div>
              </div>
            </div>
            <div className="bg-white p-4 w-full rounded-lg shadow-lg mt-6 h-auto">
              <div className="mx-3 mb-4 text-2xl text-gray-700 font-bold">
                <Link to="/allcourses">All Courses</Link>
              </div>
              <div className="grid sm:grid-cols-2 md:grid-cols-5 grid-cols-1 gap-4">
                {courseInfo?.map((val) => {
                  return (
                    <MyCourses
                      key={val?.course_name?.id}
                      imgsrc={baseURL + val?.course_name?.course_file}
                      courseName={val?.course_name?.course_title}
                      author={val?.course_name?.author}
                      id={val?.course_name?.id}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Dashboard;
