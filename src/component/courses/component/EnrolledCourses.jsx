import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
// import { getAllotedPackage } from "../../../api";
// import Clockicon from "../../../assets/img/clock-icon.svg"
// import LessonIcon from "../../../assets/img/lessons-icon.svg"
import { allotedPackageDetails } from "../../../redux/actions/courseAction";
function EnrolledCourses(props) {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.user?.currentUser);
  const courseInfo = useSelector(
    (state) => state.course?.allotedPackageDetails
  );
  const baseURL = "https://rupalibhargava.pythonanywhere.com";

  useEffect(() => {
    dispatch(allotedPackageDetails(currentUser?.user_id));
  }, []);
  return (
    <>
      {courseInfo.map((val) => {
        return (
          <div
            className="w-auto lg:mx-4 md:mx-2 shadow-lg bg-white rounded-md my-2"
            key={val.id}
            id={val.course_name.id}
          >
            {console.log(val)}
            <Link to={"/courses/chaptervideo/" + val.course_name.id}>
              <img
                src={baseURL + val.course_name.course_file}
                alt="abcadfas"
                className="w-full h-60 rounded-t-md"
              />
            </Link>

            <div className="p-2">
              <p className="text-gray-500 text-sm">Course</p>
              <p className="font-bold text-gray-900 mb-2 text-xl">
                <Link to={"/courses/chaptervideo/" + val.course_name.id}>
                  {" "}
                  {val.course_name.course_title}
                </Link>
              </p>
              <span className="text-gray-400 my-5 text-sm">Purchased</span>
              {/* <span className="float-right text-red-500 text-sm">
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
          </p> */}
              {/* <span className="float-left">
            <img src={LessonIcon} alt="...." className="inline w-5 h-5 mx-2" />
            {val.course_name.about} 
          </span> */}
              {/* <span className="text-center">
            <img src={Clockicon} alt="...." className="inline w-5 h-5 ml-3 mr-2" />
            {val.course_name.total_hours}
          </span> */}
              <span className="float-right">
                by&nbsp;
                <span className="text-lg text-blue-500">
                  {val.course_name.author}
                </span>
              </span>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default EnrolledCourses;

{
  /**key={val.id}
                imgsrc={baseURL + val.course_name.course_file}
                courseName={val.course_name.course_title}
                progress="70%"
                totalLesson={val.course_name.total_hours}
                completedLesson="7"
                totalTime={val.course_name.total_hours}
                level={val.course_name.level}
                id={val.course_name.id} */
}
