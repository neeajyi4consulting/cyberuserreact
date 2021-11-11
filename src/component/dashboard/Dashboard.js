import React, { useEffect, useState } from "react";
import Sidebar from "../sidebar/Sidebar";
import MyCourses from "./component/MyCourses";
import Services from "./component/Services";
import Boxfooter from "./component/BoxFooter";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { useDispatch, useSelector } from "react-redux";
import { getPackage } from "../../redux/actions/packageAction";
import {
  fetchPackageDetails,
  getBannerList,
  getEventList,
  getServiceList,
} from "../../api";
import { Link } from "react-router-dom";
import { allotedPackageDetail } from "../../redux/actions/courseAction";

const Dashboard = () => {
  const dispatch = useDispatch();
  const storedData = useSelector((state) => state);
  const { user, course } = storedData;
  const loading = course?.loading;
  const currentUser = user?.currentUser;
  const courseInfo = course?.allotedPackageDetails;
  const baseURL = "https://rupalibhargava.pythonanywhere.com";
  const [packageInfo, setPackageInfo] = useState([]);
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

  useEffect(() => {
    dispatch(getPackage());
    fetchExtraDetails();
  }, []);

  useEffect(() => {
    dispatch(allotedPackageDetail(currentUser?.user_id));
  }, [packageInfo]);
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
      <Sidebar selectedValue="dashboard" />
      <div className="p-5 bg-gray-200">
        <div className="pb-5 text-xl font-bold text-gray-700">Dashboard</div>
        <div className="relative w-full hidden md:block">
          <Carousel
            autoPlay
            interval="5000"
            infiniteLoop
            stopOnHover
            showThumbs={false}
          >
            {bannerDetails.map((val) => {
              return (
                <div key={val.id}>
                  <a href={val.link} target="_blank" rel="noopener noreferrer">
                    <img
                      src={baseURL + val.image}
                      alt="...."
                      className="w-full h-96 cursor-pointer"
                    />
                  </a>
                </div>
              );
            })}
          </Carousel>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 mt-5">
          <div>
            <div className="bg-white p-4 w-full rounded-lg shadow-lg">
              <Link to="/courses">
                <div className="m-3 text-2xl text-gray-700 font-bold">
                  My Courses
                </div>
              </Link>
              <div className="grid md:grid-cols-3 grid-cols-1">
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
            <div className="bg-white p-4 w-full rounded-lg shadow-lg mt-8">
              <div className="mx-3 mb-4 text-2xl text-gray-700 font-bold">
                Packages
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {packageInfo.map((val) => {
                  return (
                    <div
                      key={val.id}
                      className="bg-blue-400 text-white text-sm rounded-lg shadow-lg p-3 w-full grid  grid-cols-3"
                    >
                      <div className="inline-block col-span-2">
                        <p className="text-lg">{val.name}</p>
                        <p>Price: ${val.price}</p>
                      </div>
                      <a
                        href={val?.payment_link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white my-auto text-black p-2 h-10 rounded-full font-bold inline-block text-center float-right"
                      >
                        Buy Now
                      </a>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="bg-white shadow-lg rounded-lg lg:ml-5 p-4 mt-5 lg:mt-0">
            <div className="m-3 text-2xl text-gray-700 font-bold">Services</div>
            {event.map((val) => {
              return (
                <Services
                  key={val?.id}
                  id={val?.id}
                  title={val.title}
                  link={val.link}
                  about={val.about}
                  img={baseURL + val.image}
                />
              );
            })}
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-lg mt-8 mb-12 p-5 grid grid-cols-2 gap-4 lg:grid-cols-6">
          {services.map((val) => {
            return (
              <Boxfooter
                key={val.title}
                id={val.title}
                title={val.title}
                link={val.link}
                img={baseURL + val.image}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Dashboard;
