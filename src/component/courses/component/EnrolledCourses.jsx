import React,{ useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getAllotedPackage } from "../../../api";
import Clockicon from "../../../assets/img/clock-icon.svg"
import LessonIcon from "../../../assets/img/lessons-icon.svg"
function EnrolledCourses(props) {
  const currentUser = useSelector((state) => state.user.currentUser);
  const baseURL = "https://rupalibhargava.pythonanywhere.com";
  const [allotedPackage, setAllotedPackage] = useState([])
  const fetchAllotedPackage = async (userId) =>{
    await getAllotedPackage(userId)
    .then((response)=>{
      setAllotedPackage(response.data?.data)
    })
  }

  useEffect(() => {
    fetchAllotedPackage(currentUser.user_id)
  }, []);
  return (
    <>
    {allotedPackage.map((val)=>{
      return(
        <div className="w-auto lg:mx-4 md:mx-2 shadow-lg bg-white rounded-md my-2" key={val.id} id={val.course_name.id}>
        <img src={baseURL + val.course_name.course_file} alt="abcadfas" className="w-full h-60 rounded-t-md" />
        <div className="p-2">
          <p className="text-gray-500 text-sm">Course</p>
          <p  className="font-bold text-gray-900 mb-2"><Link to={"/courses/chaptervideo/" + props.id}> {val.course_name.course_title}</Link>
          </p>
          <span className="text-gray-400  text-sm">Purchased</span>
          <span className="float-right text-red-500 text-sm">
            Target Completion Date {val.course_name.total_hours} Days
          </span>
          <div className="relative bg-gray-200 mt-4">
            <div className="overflow-hidden h-1 w-80  text-xs flex rounded bg-gray-200">
              <div
                style={{ width: `"70%"` }}
                className=" flex flex-col text-center z-0 text-white bg-blue-500"
              ></div>
            </div>
          </div>
          <p className="mb-4">
          7 OF {val.course_name.total_hours} Lessons Completed
          </p>
          <span className="float-left">
            <img src={LessonIcon} alt="...." className="inline w-5 h-5 mx-2" />
            {val.course_name.total_hours} Lessons
          </span>
          <span className="text-center">
            <img src={Clockicon} alt="...." className="inline w-5 h-5 ml-3 mr-2" />
            {val.course_name.total_hours}
          </span>
          <span className="float-right">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 inline text-red-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1}
                d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
              />
            </svg>
            {val.course_name.level}
          </span>
        </div>
      </div>
      )
    })}
      
    </>
  );
}

export default EnrolledCourses;


{/**key={val.id}
                imgsrc={baseURL + val.course_name.course_file}
                courseName={val.course_name.course_title}
                progress="70%"
                totalLesson={val.course_name.total_hours}
                completedLesson="7"
                totalTime={val.course_name.total_hours}
                level={val.course_name.level}
                id={val.course_name.id} */}
