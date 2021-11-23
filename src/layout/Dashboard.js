import React, { useEffect, useState } from "react";
import MyCourses from "../Pages/dashboard/MyCourses";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { useDispatch, useSelector } from "react-redux";
import { fetchPackageDetails, getBannerList } from "../api";
import { Link } from "react-router-dom";
import {
  allotedPackageDetaile,
  fetchUserDetails,
  getPackage,
  showPackagesInCourse,
} from "../redux/actions/courseAction";
import { userDetails } from "../redux/actions/authActions";

const Dashboard = () => {
  const dispatch = useDispatch();
  const storedData = useSelector((state) => state);
  const { user, course } = storedData;
  const loading = course?.loading;
  const currentUser = user?.currentUser;
  const courseInfo = course?.allotedPackageDetails;
  const baseURL = "https://rupalibhargava.pythonanywhere.com";
  const [bannerDetails, setBannerDetails] = useState([]);
  const [packageName, setPackageName] = useState("");
  // console.log("this is user details", user?.userDetails?.package_alloted)

  const fetchPackageCourse = () => {
    const data = new FormData();
    data.append("package_id", 25);
    dispatch(showPackagesInCourse(data));
  };

  const packageTest = () => {
    if (course?.userDetails?.package_alloted?.length > 0) {
      if (
        course?.userDetails?.package_alloted[0]?.package_name?.name ==
        "Plus Package"
      ) {
        return (
          <div className="mt-6">
            <div className="h-auto">
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
            {course?.packageCourse !== undefined ? (
              <div className="bg-white p-4 w-full rounded-lg shadow-lg mt-6 h-auto">
                <div className="mx-3 mb-4 text-2xl text-gray-700 font-bold">
                  <Link to="/allcourses">Gold Package</Link>
                </div>
                <div className="grid sm:grid-cols-2 md:grid-cols-5 grid-cols-1 gap-4">
                  {course?.packageCourse?.map((val) => {
                    return (
                      <MyCourses
                        key={val?.id}
                        imgsrc={baseURL + val?.course_file}
                        courseName={val?.course_title}
                        author={val?.author}
                        id={val?.id}
                      />
                    );
                  })}
                </div>
              </div>
            ) : null}
          </div>
        );
      } else {
        return (
          <div className="mt-5">
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
        );
      }
    } else {
      return (
        <div className="grid md:grid-cols-2  grid-cols-1 gap-16 mt-5">
          {test}
        </div>
      );
    }
  };

  const test = !course?.packageDetails
    ? console.log(
        "no package purchased and info of package",
        course?.packageDetails
      )
    : course?.packageDetails.map((val) => {
        return (
          <div
            key={val.id}
            className="flex justify-center items-center h-screen bg-blue-lightest"
          >
            <div className="bg-gray-300 w-full h-60 rounded-lg shadow-md flex card text-grey-darkest">
              <img
                className="w-1/2 h-full rounded-l-lg"
                src={baseURL + val.image}
                alt="PackageImage"
              />
              <div className="w-full flex flex-col">
                <div className="p-4 pb-0 flex-1">
                  <h3 className="font-light mb-1 text-grey-darkest">
                    {val.name}
                  </h3>
                  <span className="text-5xl text-grey-darkest">
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
                      </svg>
                      Free Test
                    </div>
                  </div>
                </div>
                <Link to="/">
                  <div className="bg-grey-lighter p-3 flex items-center justify-between transition hover:bg-grey-light">
                    Purchase Now
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        );
      });

  useEffect(async () => {
    fetchUserDetails(currentUser?.user_id);
    dispatch(getPackage());
    setBannerDetails(await (await getBannerList()).data?.data);
    dispatch(userDetails(currentUser?.user_id));
    dispatch(allotedPackageDetaile(currentUser?.user_id));
    fetchPackageCourse();
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
      <div className="px-5 pt-5 bg-gray-200">
        <div className="pb-5 text-xl font-bold text-gray-700">Dashboard</div>
        <div className="relative w-full hidden md:block">
          <Carousel
            autoPlay
            interval="5000"
            infiniteLoop
            stopOnHover
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

        {packageTest()}
      </div>
    </>
  );
};

export default Dashboard;

{
  /**
{false ? (
          <>
            <div className="text-2xl text-gray-700 mx-5 mt-10">
              Purchase any package
            </div>
            <div className="grid md:grid-cols-2  grid-cols-1 gap-16">
              {" "}
              {test}
            </div>
          </>
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
            {true ? (
              <div className="bg-white p-4 w-full rounded-lg shadow-lg mt-6 h-auto">
                <div className="mx-3 mb-4 text-2xl text-gray-700 font-bold">
                  <Link to="/allcourses">Gold Package</Link>
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
            ) : null}
          </div>
        )} */
}
