import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ShowAllCourses from "../Pages/ShowAllCourses";
import { userDetails } from "../redux/actions/authActions";
import { getPackage } from "../redux/actions/courseAction";
import { paymentAction } from "../redux/actions/purchaseAction";

function AllCourses() {
  const dispatch = useDispatch();
  const baseURL = "https://rupalibhargava.pythonanywhere.com";
  const { user, course } = useSelector((state) => state);
  const currentUser = user?.currentUser;

  const tryPayment =(val) =>{
    const detailsOfUser = user.userDetails
    const amount = val?.price;
    const data = new FormData();
    data.append("amount", amount)
    data.append("user_id", currentUser?.user_id)
    data.append("package_id", val?.id)
    dispatch(paymentAction(data, detailsOfUser, val))
  }

  useEffect(() => {
    dispatch(getPackage());
    dispatch(userDetails(currentUser?.user_id));
  }, []);
  return (
    <>
      <div className="z-20  p-5 bg-gray-200">
        <div className="bg-white p-5 rounded-lg shadow-lg mt-6">
          <div className="text-xl font-bold text-gray-700 bg-white pb-3">
            All Courses
          </div>
          <div className="grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 grid-cols-1">
            <ShowAllCourses />
          </div>
        </div>
        <div className="bg-white p-5 rounded-lg shadow-lg mt-6">
          <div className="text-xl font-bold text-gray-700 bg-white pb-3">
            All Packages
          </div>
          <div className="grid md:grid-cols-2  grid-cols-1 gap-16">
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
                      <div className="bg-gray-300 w-full h-60 rounded-lg shadow-md flex card text-grey-darkest">
                        <img
                          className="w-1/2 h-full rounded-l-lg"
                          src={baseURL + val.image}
                          alt="PackageImage"
                        />
                        <div className="w-full flex flex-col">
                          <div className="p-4 pb-0 flex-1">
                            <h3 className="font-light mb-1 text-xl text-grey-darkest">
                              {val.name}
                            </h3>
                            <span className="text-5xl text-grey-darkest">
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
                          <button onClick={()=>{tryPayment(val)}}>
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
      </div>
    </>
  );
}

export default AllCourses;

