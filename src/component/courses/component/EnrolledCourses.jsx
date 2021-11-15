import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { allotedPackageDetaile } from "../../../redux/actions/courseAction";
function EnrolledCourses(props) {
  const dispatch = useDispatch();
  const storedData = useSelector((state) => state);
  const { user, course } = storedData;
  const currentUser = user?.currentUser;
  const courseInfo = course?.allotedPackageDetails;
  const baseURL = "https://rupalibhargava.pythonanywhere.com";

  useEffect(() => {
    dispatch(allotedPackageDetaile(currentUser?.user_id));
  }, []);
  return (
    <>
      {courseInfo.map((val) => {
        return (
          <div
            className="w-auto lg:mx-2 md:mx-2 sm:mx-2 shadow-lg bg-white rounded-md my-2 relative"
            key={val.id}
            id={val.course_name.id}
          >
            <Link to={"/courses/chaptervideo/" + val.course_name.id}>
            <div
              style={{
                backgroundImage: `url(${
                  baseURL + val.course_name.course_file
                })`,
                backgroundSize: "cover",
                backgroundPosition: "center center",
              }}
              className=" w-full h-40 rounded-t-md"
            ></div>

            <div className="p-2 ">
              <p className="text-gray-500 text-sm">Course</p>
              <p className=" text-gray-800 mb-5 text-xl">
                
                  {val.course_name.course_title}
              </p>
              <span className="absolute bottom-2 right-2">
                by&nbsp;
                <span className="text-md text-blue-500">
                  {val.course_name.author}
                </span>
              </span>
            </div>
            </Link>
          </div>
        );
      })}
    </>
  );
}

export default EnrolledCourses;
