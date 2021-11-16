import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getUserDetails } from "../api";
import Sidebar from "../component/sidebar/Sidebar";
import { logout, editDetails } from "../redux/actions/authActions";

function Admin() {
  const currentUser = useSelector((state) => state.user.currentUser);
  const dispatch = useDispatch();
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userNumber, setUserNumber] = useState("");
  const [editUserFirstName, setEditUserFirstName] = useState("");
  const [editUserLastName, setEditUserLastName] = useState("");
  const [editUserEmail, setEditUserEmail] = useState("");
  const [editUserNumber, setEditUserNumber] = useState("");
  const [toogleEditForm, setToogleEditForm] = useState(true);

  const fetchUserDetails = async () => {
    await getUserDetails(currentUser.user_id)
      .then((response) => {
        const userDetails = response.data.data;
        setUserName(userDetails.first_name + " " + userDetails.last_name);
        setUserEmail(userDetails.email);
        setUserNumber("+91 " + userDetails.phone);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleLogOut = () => {
    dispatch(logout());
  };

  const handleEditForm = () => {
    setToogleEditForm(toogleEditForm ? false : true);
  };

  const handleSubmitNewDetails = () => {
    const data = new FormData();
    data.append("first_name", editUserFirstName);
    data.append("last_name", editUserLastName);
    data.append("email", editUserEmail);
    data.append("phone", editUserNumber);
    data.append("user_id", currentUser.user_id);
    dispatch(editDetails(data));
  };

  useEffect(() => {
    fetchUserDetails();
  });

  return (
    <>
      <Sidebar selectedValue="profile" />
      <div className="bg-gray-200 pt-5 ">
        <div className="bg-white px-5 py-3 mx-16 rounded-lg hidden md:block shadow-lg">
          <span className="font-bold text-2xl mx-8">Profile</span>
          <span className="float-right ">
            <Link to="/admin">Home</Link> /{" "}
            <Link to="/dashboard">Dashboard</Link> /{" "}
            <Link to="/admin">Profile</Link>
          </span>
        </div>
        <div
          className={` ${
            toogleEditForm ? "hidden" : ""
          } h-full w-full text-center shadow-lg fixed top-10 bg-gray-600 bg-opacity-50  `}
        >
          <div className="flex justify-center h-screen items-center antialiased">
            <div className="flex flex-col w-11/12 sm:w-5/6 lg:w-1/2 max-w-2xl mx-auto rounded-lg border border-gray-300 shadow-xl">
              <div className="flex flex-row justify-between p-6 bg-white border-b border-gray-200 rounded-tl-lg rounded-tr-lg">
                <p className="font-semibold text-gray-800">Edit Details</p>
                <svg
                  className="w-6 h-6"
                  onClick={handleEditForm}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              </div>
              <form onSubmit={handleSubmitNewDetails}>
                <div className="flex flex-col px-6 py-5 bg-gray-50">
                  <input
                    type="text"
                    placeholder="Enter New First Name"
                    required
                    value={editUserFirstName}
                    onChange={(e) => {
                      setEditUserFirstName(e.target.value);
                    }}
                    className="w-full p-5 bg-white border border-gray-200 rounded shadow-sm appearance-none"
                  />
                  <br />
                  <input
                    type="text"
                    placeholder="Enter New Last Name"
                    required
                    value={editUserLastName}
                    onChange={(e) => {
                      setEditUserLastName(e.target.value);
                    }}
                    className="w-full p-5 bg-white border border-gray-200 rounded shadow-sm appearance-none"
                  />
                  <br />
                  <input
                    type="email"
                    placeholder="Enter New Email"
                    required
                    value={editUserEmail}
                    onChange={(e) => {
                      setEditUserEmail(e.target.value);
                    }}
                    className="w-full p-5 bg-white border border-gray-200 rounded shadow-sm appearance-none"
                  />
                  <br />
                  <input
                    type="text"
                    placeholder="Enter New Number"
                    required
                    value={editUserNumber}
                    onChange={(e) => {
                      setEditUserNumber(e.target.value);
                    }}
                    className="w-full p-5 bg-white border border-gray-200 rounded shadow-sm appearance-none"
                  />
                  <br />
                </div>
                <div className="flex flex-row items-center justify-between p-5 bg-white border-t border-gray-200 rounded-bl-lg rounded-br-lg">
                  <p
                    onClick={handleEditForm}
                    className="font-semibold text-gray-600"
                  >
                    Cancel
                  </p>
                  <button
                    onClick={handleSubmitNewDetails}
                    className="px-4 py-2 text-white font-semibold bg-blue-500 rounded"
                  >
                    Save
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="mt-5 md:mx-16 rounded-lg bg-white p-10 pb-20 shadow-lg">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 rounded-full ml-2 inline-block" viewBox="0 0 20 20" fill="currentColor">
  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
</svg>
          <span className="md:ml-5 text-xl">{userName}</span>
          <span className="float-right text-red-500">
            <Link to="/" onClick={handleLogOut}>
              Sign Out
            </Link>
          </span>
          <div className="border-2 p-5 mt-10">
            <div>
              <p className="text-gray-500 text-sm pt-10">Account Name</p>
              <span
                onClick={handleEditForm}
                className="text-blue-500 float-right cursor-pointer hover:text-blue-800"
              >
                Edit
              </span>
              <p className="border-b-2 py-5 w-full">{userName} </p>
            </div>
            <div>
              <p className="text-gray-500 text-sm pt-10">Email</p>
              {/* <span
                onClick={handleEditForm} className="text-blue-500 float-right cursor-pointer hover:text-blue-800 ">Edit</span> */}
              <p className="border-b-2 py-5 w-full">{userEmail}</p>
            </div>
            <div className="border-b-2 mb-5">
              <p className="text-gray-500 text-sm pt-10">Contact Number</p>
              {/* <span
                onClick={handleEditForm} className="text-blue-500 float-right cursor-pointer hover:text-blue-800">Edit</span> */}
              <p className="border-b-1 py-5 w-full">{userNumber}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Admin;
