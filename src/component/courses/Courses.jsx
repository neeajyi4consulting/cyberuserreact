import React from "react";
import EnrolledCourses from "./component/EnrolledCourses";
import Sidebar from "../sidebar/Sidebar";
import { useSelector, useDispatch } from "react-redux";

function Courses() {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.user.currentUser);
  // const baseURL = "https://rupalibhargava.pythonanywhere.com";
  // // }
  // const [allotedPackage, setAllotedPackage] = useState([])

  // const fetchAllotedPackage = async (userId) =>{
  //   await getAllotedPackage(userId)
  //   .then((response)=>{
  //     setAllotedPackage(response.data?.data)
  //   })
  // }

  // useEffect(() => {
  //   fetchAllotedPackage(currentUser.user_id)
  // }, []);
  return (
    <>
      <Sidebar />
      <div className="z-20  p-5 bg-gray-200">
        <div className="py-5 text-xl font-bold text-gray-700">
          Enrolled Courses
        </div>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1">
        <EnrolledCourses
              />
        </div>
      </div>
    </>
  );
}

export default Courses;
