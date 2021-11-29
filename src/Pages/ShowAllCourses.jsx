import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import {
  showPackagesInCourse,
} from "../redux/actions/courseAction";
import { coursePurchase } from "../redux/actions/purchaseAction";
function ShowAllCourses({ packageId }) {
  const dispatch = useDispatch();
  const { user, course } = useSelector((state) => state);
  const currentUser = user.currentUser;
  const loading = course?.loading;
  const courseInfo = course?.packageCourse;
  const baseURL = "https://rupalibhargava.pythonanywhere.com";

  const packageDetailsFunction = async () => {
    const data = new FormData();
    data.append("package_id", 25);
    dispatch(showPackagesInCourse(data));
  };

  const coursePayment =(val) =>{
    const detailsOfUser = user.userDetails
    const amount = +val?.selling_price;
    const data = new FormData();
    data.append("amount", amount)
    data.append("user_id", currentUser?.user_id)
    data.append("course_id", val?.id)
    dispatch(coursePurchase(data, detailsOfUser, val))
  }

  useEffect(() => {
    packageDetailsFunction();
  }, []);


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
          &nbsp;&nbsp;&nbsp;please wait <br /> this may take a few seconds
        </div>
      </div>
    );
  }


  return (
    <>
      {!course?.packageCourse ? (
        <div>hello</div>
      ) : (
        courseInfo.map((val) => {
          return (
            <div
              className="w-auto lg:mx-2 md:mx-2 sm:mx-2  shadow-lg  text-white text-center rounded-md my-2 relative"
              key={val.id}
              id={val.id}
            >
              <div
                style={{
                  backgroundImage: `url(${baseURL + val.course_file})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center center",
                }}
                className=" w-full h-40 rounded-t-md "
              ></div>

              <div className="p-2 bg-white text-left h-40">
                <p className="text-gray-500 text-sm">Course</p>
                <p className=" text-gray-800 h-16 text-xl font-dm">
                  {val.course_title}
                </p>
                <p className="text-gray-800 text-xl h-8">&#8377;{val.selling_price}</p>
                <div className="text-black text-xs">
                  by&nbsp;
                  <span className="">{val.author}</span>
                </div>
              </div>
              <div className="pt-2 bg-blue-700 hover:bg-blue-600 hover:shadow-lg duration-300 h-10 rounded-b-lg shadow-sm font-acme">
                <button onClick={()=>{coursePayment(val)}}>Buy Course</button>
              </div>
            </div>
          );
        })
      )}
    </>
  );
}

export default ShowAllCourses;
