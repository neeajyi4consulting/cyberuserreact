import React from "react";
import Clockicon from "../../../assets/img/clock-icon.svg";
import LessonIcon from "../../../assets/img/lessons-icon.svg";

function AllCourses(props) {
  // const history = useHistory();

  return (
    <>
      <div className="w-auto lg:mx-4 md:mx-2 shadow-lg bg-white rounded-md my-2">
        <img
          src={props.imgsrc}
          alt="abcadfas"
          className="w-full h-60 rounded-t-md"
        />
        {/* <iframe
          width="560"
          height="315"
          src={props.link}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe> */}
        <div className="p-2">
          <p className="text-gray-500 text-sm">Course</p>
          <a
            href={props.link}
            // to={props.link}
            // rel="noreferrer noopener"

            className="font-bold text-gray-900 mb-2"
          >
            {props.courseName}
          </a>
          <p className="text-blue-800">${props.price}</p>
          <hr className="mb-2 mt-1 " />
          <span className="float-left">
            <img src={LessonIcon} alt="...." className="inline w-5 h-5 mx-2" />
            {props.totalLesson} Lessons
          </span>
          <span className="text-center">
            <img
              src={Clockicon}
              alt="...."
              className="inline w-5 h-5 mr-2 ml-3"
            />
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

export default AllCourses;
