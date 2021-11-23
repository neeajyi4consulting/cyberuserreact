import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getPackage, showPackagesInCourse } from "../redux/actions/courseAction";
function ShowAllCourses() {
  const dispatch = useDispatch();
  const { course } =  useSelector((state) => state);
  const courseInfo = course?.packageCourse;
  const baseURL = "https://rupalibhargava.pythonanywhere.com";

  const packageDetailsFunction= async() =>{
    dispatch(getPackage())
    const data= new FormData();
    data.append("package_id", 25)
    dispatch(showPackagesInCourse(data));
  }

  useEffect(() => {
    packageDetailsFunction()
  }, []);
  return (
    <>
      {!course?.packageCourse ?(<div>hello</div>) 
      : 
      courseInfo.map((val) => {
        return (
          <div
            className="w-auto lg:mx-2 md:mx-2 sm:mx-2  shadow-lg  text-white text-center rounded-md my-2 relative"
            key={val.id}
            id={val.id}
          >
            <div
              style={{
                backgroundImage: `url(${
                  baseURL + val.course_file
                })`,
                backgroundSize: "cover",
                backgroundPosition: "center center",
              }}
              className=" w-full h-40 rounded-t-md "
            ></div>

            <div className="p-2 bg-white text-left h-32">
              <p className="text-gray-500 text-sm">Course</p>
              <p className=" text-gray-800 h-20 text-xl">
                
                  {val.course_title}
              </p>
              <div className="text-black text-xs">
                by&nbsp;
                <span className="">
                  {val.author}
                </span>
              </div>
            </div>
            <div className="pt-2 bg-blue-700 hover:bg-blue-900 hover:shadow-inner h-10 rounded-b-lg shadow-lg">
            <Link to="/allcourses">
            Buy Course
            </Link></div>
          </div>
        );
      })
    }
    </>
  );
}

export default ShowAllCourses;
