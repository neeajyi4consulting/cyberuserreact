import React, {useState} from "react";
import EnrolledCourses from "./component/EnrolledCourses";
import Sidebar from "../sidebar/Sidebar";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCourse } from "../../redux/actions/courseAction";
import { getAllotedPackage } from "../../api";

function Courses() {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.user.currentUser);
  const baseURL = "https://rupalibhargava.pythonanywhere.com";
  // }
  const [allotedPackage, setAllotedPackage] = useState([])

  const fetchAllotedPackage = async (userId) =>{
    await getAllotedPackage(userId)
    .then((response)=>{
      setAllotedPackage(response.data?.data)
    })
  }

  useEffect(() => {
    fetchAllotedPackage(currentUser.user_id)
    dispatch(getCourse());
    // dispatch(fetchUserDetails(currentUser.user_id));
  }, []);
  return (
    <>
      <Sidebar />
      <div className="z-20  p-5 bg-gray-200">
        <div className="py-5 text-xl font-bold text-gray-700">
          Enrolled Courses
        </div>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1">
          {allotedPackage.map((val) => {
            return (
              <EnrolledCourses
                key={val.id}
                imgsrc={baseURL + val.course_name.course_file}
                courseName={val.course_name.course_title}
                progress="70%"
                totalLesson="10"
                completedLesson="7"
                totalTime={val.course_name.total_hours}
                level={val.course_name.level}
                id={val.course_name.id}
              
                // link={val.course_name.link}
              />
            );
          })}
        </div>
        {/* <div className="py-5 text-xl font-bold text-gray-700">All Courses</div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {listOfCourse.map((val) => {
            return (
              <AllCourses
                key={val.created_at}
                imgsrc={baseURL + val.course_file}
                courseName={val.course_title}
                link="https://www.youtube.com/embed/PVuOLUeeo3k"
                price={val.selling_price}
                totalLesson="10"
                totalTime={val.total_hours}
                level={val.course_level}
              />
            );
          })}
        </div> */}
      </div>
    </>
  );
}

export default Courses;
