import React from "react";
import { Link } from "react-router-dom";
import Clockicon from "../../../assets/img/clock-icon.svg"
import LessonIcon from "../../../assets/img/lessons-icon.svg"

function EnrolledCourses(props) {
  return (
    <>
      <div className="w-auto lg:mx-4 md:mx-2 shadow-lg bg-white rounded-md my-2">
        <img src={props.imgsrc} alt="abcadfas" className="w-full h-60 rounded-t-md" />
        <div className="p-2">
          <p className="text-gray-500 text-sm">Course</p>
          <p  className="font-bold text-gray-900 mb-2"><Link to={"/courses/chaptervideo/" + props.id}> {props.courseName}</Link>
          </p>
          <span className="text-gray-400 text-gray-500 text-sm">Purchased</span>
          <span className="float-right text-red-500 text-sm">
            Target Completion Date 40 Days
          </span>
          <div className="relative bg-gray-200 mt-4">
            <div className="overflow-hidden h-1 w-80  text-xs flex rounded bg-gray-200">
              <div
                style={{ width: `${props.progress}` }}
                className=" flex flex-col text-center z-0 text-white bg-blue-500"
              ></div>
            </div>
          </div>
          <p className="mb-4">
            {props.completedLesson} OF {props.totalLesson} Lessons Completed
          </p>
          <span className="float-left">
            <img src={LessonIcon} alt="...." className="inline w-5 h-5 mx-2" />
            {props.totalLesson} Lessons
          </span>
          <span className="text-center">
            <img src={Clockicon} alt="...." className="inline w-5 h-5 ml-3 mr-2" />
            {props.totalTime}
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
            {props.level}
          </span>
        </div>
      </div>
    </>
  );
}

export default EnrolledCourses;
