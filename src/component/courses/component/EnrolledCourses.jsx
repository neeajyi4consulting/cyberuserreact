import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { allotedPackageDetail } from "../../../redux/actions/courseAction";
function EnrolledCourses(props) {
  const dispatch = useDispatch();
  const storedData = useSelector((state)=>state)
  const { user, course } = storedData;
  const currentUser = user?.currentUser
  const courseInfo = course?.allotedPackageDetails
  const baseURL = "https://rupalibhargava.pythonanywhere.com";

  useEffect(() => {
    dispatch(allotedPackageDetail(currentUser?.user_id));
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