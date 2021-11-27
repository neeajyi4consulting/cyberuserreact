import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ShowAllCourses from "../Pages/ShowAllCourses";
import { userDetails } from "../redux/actions/authActions";
import { getPackage, plusPackage } from "../redux/actions/courseAction";
import { coursePurchase, paymentAction } from "../redux/actions/purchaseAction";

function AllCourses() {
  const dispatch = useDispatch();
  const baseURL = "https://rupalibhargava.pythonanywhere.com";
  const { user, course } = useSelector((state) => state);
  const currentUser = user?.currentUser;
  const loading = course?.loading;

  const packagePayment = (val) => {
    const detailsOfUser = user.userDetails;
    const amount = val?.price;
    const data = new FormData();
    data.append("amount", amount);
    data.append("user_id", currentUser?.user_id);
    data.append("package_id", val?.id);
    console.log(detailsOfUser)
    dispatch(paymentAction(data, detailsOfUser, val));
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
    dispatch(getPackage());
    dispatch(userDetails(currentUser?.user_id));
    const data = new FormData()
    data.append("package_id", 24)
    dispatch(plusPackage(data))
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
      <div className="z-20  p-5 bg-gray-200">
        <div className="bg-white p-5 rounded-lg shadow-lg mt-6">
          <div className="text-xl font-bold text-gray-700 bg-white">
            All Packages
          </div>
          <div className="grid md:grid-cols-2  grid-cols-1 md:gap-16 gap-1">
            {!course?.packageDetails
              ? console.log(
                  "no package purchased and info of package",
                  course?.packageDetails
                )
              : course?.packageDetails.map((val) => {
                  return (
                    <div
                      key={val.id}
                      className="flex justify-center items-center h-full my-5 bg-blue-lightest"
                    >
                      <div className="bg-gray-300 w-full md:h-60 h-48 rounded-lg shadow-md flex card text-grey-darkest">
                        <img
                          className="w-1/2 h-full rounded-l-lg"
                          src={baseURL + val.image}
                          alt="PackageImage"
                        />
                        <div className="w-full flex flex-col">
                          <div className="p-4 pb-0 flex-1">
                            <h3 className="font-light mb-1 md:text-xl text-lg text-grey-darkest">
                              {val.name}
                            </h3>
                            <span className="md:text-5xl text-lg text-grey-darkest">
                              &#8377; {val.price}
                            </span>
                            <div className="flex items-center mt-4">
                              <div className="pr-2 text-xs">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="h-5 w-5 inline"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={1}
                                    d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                                  />
                                </svg>
                                Free Test
                              </div>
                            </div>
                          </div>
                          <button
                            onClick={() => {
                              packagePayment(val);
                            }}
                          >
                            <div className="bg-grey-lighter p-3 flex items-center justify-between transition hover:bg-grey-light">
                              Purchase Now
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={1}
                                  d="M9 5l7 7-7 7"
                                />
                              </svg>
                            </div>
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
          </div>
        </div>
        <div className="bg-white p-5 rounded-lg shadow-lg mt-6">
          <div className="text-xl font-bold text-gray-700 bg-white pb-3">
            Courses in Gold Package
          </div>
          <div className="grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 grid-cols-1">
            <ShowAllCourses />
          </div>
        </div>
        <div className="bg-white p-5 rounded-lg shadow-lg mt-6">
          <div className="text-xl font-bold text-gray-700 bg-white pb-3">
            Courses in Plus Package
          </div>
          <div className="grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 grid-cols-1">
            {!course?.plusPackageCourses ? (
              <div>hello</div>
            ) : (
              course?.plusPackageCourses.map((val) => {
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
                      <p className=" text-gray-800 h-16 text-xl">
                        {val.course_title}
                      </p>
                      <p className="text-gray-800 text-xl h-8">
                        &#8377;{val.selling_price}
                      </p>
                      <div className="text-black text-xs">
                        by&nbsp;
                        <span className="">{val.author}</span>
                      </div>
                    </div>
                    <div className="pt-2 bg-blue-700 hover:bg-blue-900 hover:shadow-inner h-10 rounded-b-lg shadow-lg">
                      <button
                        onClick={() => {
                          coursePayment(val);
                        }}
                      >
                        Buy Course
                      </button>
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default AllCourses;
