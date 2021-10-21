import React, { useEffect, useState } from "react";
import Sidebar from "../sidebar/Sidebar";
import banner from "../../assets/img/Banner.jpg";
import MyCourses from "./component/MyCourses";
import Upcomingtraining from "./component/UpcomingTraining";
import Boxfooter from "./component/BoxFooter";
import Coursesinfo from "./component/CoursesInfo";
import Membership from "./component/Membership";
import { useDispatch, useSelector } from "react-redux";
import { getCourse } from "../../redux/actions/courseAction";
import { getPackage } from "../../redux/actions/packageAction";
import { fetchPackageDetails, getAllotedPackage } from "../../api";

const Dashboard = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector((state)=>state.user.currentUser);
  const baseURL = "https://rupalibhargava.pythonanywhere.com";
  const [packageInfo, setPackageInfo] = useState([]);
  const [allotedPackage, setAllotedPackage] = useState([])
  const getPackageInfo = async () => {
    await fetchPackageDetails().then((response) => {
      setPackageInfo(response.data?.data);
    });
    
  };

  const fetchAllotedPackage = async (userId) =>{
    await getAllotedPackage(userId)
    .then((response)=>{
      setAllotedPackage(response.data?.data)
    })
  }

  useEffect(() => {
    fetchAllotedPackage(currentUser.user_id);
    dispatch(getCourse());
    dispatch(getPackage());
    getPackageInfo();
  }, []);
  return (
    <>
      <Sidebar selectedValue="dashboard" />
      <div className="p-5 bg-gray-200">
        <div className="pb-5 text-xl font-bold text-gray-700">Dashboard</div>
        <div className="relative w-full">
          <div className="absolute top-20 text-4xl text-white left-24 hidden lg:block">
            Lorem ipsum dolor sit amet,
            <br /> consectetur adipiscing elit,
          </div>
          <img src={banner} alt="...." className="w-full" />
        </div>
        <Coursesinfo />
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div>
            <div className="bg-white p-4 w-full rounded-lg shadow-lg">
              <div className="m-3 text-2xl text-gray-700 font-bold">
                My Courses
              </div>
              <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 overflow-auto">
                {allotedPackage.map((val) => {
                  return (
                    <MyCourses
                      key={val.id}
                      imgsrc={baseURL + val.course_name.course_file}
                      courseName={val.course_name.course_title}
                      progress="70%"
                      totalDays="10"
                      completedLesson="7"
                      totalTime={val.course_name.total_hours}
                      level="beginner"
                    />
                  );
                })}
              </div>
            </div>
            <div className="bg-white p-4 w-full rounded-lg shadow-lg mt-8">
              <div className="m-3 text-2xl text-gray-700 font-bold">
                Upgrade Membership
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {packageInfo.map((val) => {
                    return (
                      <Membership
                        key={val.name}
                        name={val.name}
                        price={val.price}
                      />
                    );
                  })}
              </div>
            </div>
            {/* <Membership /> */}
          </div>
          <div className="bg-white shadow-lg rounded-lg lg:ml-5 p-4 mt-5 lg:mt-0">
            <Upcomingtraining />
          </div>
        </div>
        <Boxfooter />
      </div>
    </>
  );
};

export default Dashboard;
