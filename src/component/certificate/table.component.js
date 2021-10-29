import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCourseDetails, getUserDetails } from "../../api";
import certificateImg from "../../assets/img/Certificate-01.png";
import { courseDetails } from "../../redux/actions/courseAction";

// class TableComponent extends React.Component {
function TableComponent(props) {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.user?.currentUser);
  const detailsOfCourse = useSelector((state) => state.course?.detailsOfCourse);
  // console.log(detailsOfCourse.course_title)
  const [userName, setUserName] = useState("neeraj yadav");
  const [courseName, setCourseName] = useState("testName");

  const fetchUserDetails = async () => {
    console.log(currentUser.user_id);
    await getUserDetails(currentUser?.user_id)
      .then((response) => {
        const userDetails = response.data?.data;
        setUserName(userDetails.first_name + " " + userDetails.last_name);
        setCourseName();
      })
      .catch((err) => {
        console.log(err);
      });
    dispatch(courseDetails(props.courseId));
    // await getCourseDetails(props.courseId)
    // .then((response)=>{
    //   setCourseName(response?.data?.data)
    // })
    // console.log(props.courseId)
  };

  let newDate = new Date();
  let date = newDate.getDate();
  let month = newDate.getMonth() + 1;
  let year = newDate.getFullYear();

  useEffect(() => {
    fetchUserDetails();
  }, []);
  return (
    <div>
      <div className="my-5 z-0 " style={{ position: "relative" }}>
        <img
          src={certificateImg}
          alt="...."
          className=" z-0"
          style={{ width: "1500px", height: "850px" }}
        />
        <p
          className=""
          style={{
            position: "absolute",
            top: "30px",
            left: "200px",
            fontSize: "23px",
            fontWeight: "bold",
          }}
        >
          {date + "/" + month + "/" + year}
        </p>
        <p
          className=""
          style={{
            position: "absolute",
            top: "380px",
            left: "120px",
            fontSize: "30px",
            fontWeight: "bold",
          }}
        >
          {userName}
        </p>
        <p
          className=""
          style={{
            position: "absolute",
            top: "445px",
            left: "120px",
            fontSize: "30px",
          }}
        >
          For successfully completing training on
        </p>
        <p
          className=""
          style={{
            position: "absolute",
            top: "490px",
            left: "120px",
            fontSize: "30px",
            fontWeight: "bold",
          }}
        >
          {" "}
          {detailsOfCourse?.course_title}{" "}
        </p>
        <p
          className=""
          style={{
            position: "absolute",
            top: "535px",
            left: "120px",
            fontSize: "30px",
          }}
        >
          {" "}
          conducted online on {date + "/" + month + "/" + year}
        </p>
      </div>
    </div>
  );
}
// }

export default TableComponent;
