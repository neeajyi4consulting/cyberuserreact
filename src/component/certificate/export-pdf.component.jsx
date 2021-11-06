import React, { useEffect, useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";

import { ComponentToPrint }  from './certificate.component';
import { userDetails } from '../../redux/actions/authActions';
import { courseDetails } from '../../redux/actions/courseAction';

const Example = () => {
  const { id } = useParams();
  const dispatch = useDispatch()
  const currentUser = useSelector((state) => state.user?.currentUser);
  const userDetail = useSelector((state) => state.user?.userDetails);
  const courseDetail = useSelector((state)=> state.course?.detailsOfCourse)

  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  useEffect(() => {
    dispatch(userDetails(currentUser?.user_id))
    dispatch(courseDetails(id))
  }, [])

  return (
    <div>
      <ComponentToPrint currentUser = {userDetail?.first_name+userDetail?.last_name} courseTitle = {courseDetail?courseDetail.course_title:null} ref={componentRef} />
      <button onClick={handlePrint}>Print this out!</button>
    </div>
  );
};

export default Example;

// import React, { useEffect, useRef, useState } from "react";
// import { useSelector } from "react-redux";
// import { useParams } from "react-router";
// import { useReactToPrint } from "react-to-print";
// import ReactToPrint from "react-to-print";
// import { getUserDetails } from "../../api";
// import { ComponentToPrint } from "./certificate.component";
// import TableComponent from "./table.component";

// // class ExportPdfComponent extends React.Component {

// function ExportPdfComponent() {
//   const { id } = useParams();
//   const currentUser = useSelector((state) => state.user?.currentUser);
//   const componentRef = useRef();
//   // const courseName = "Andriod Studio";
//   const handlePrint = useReactToPrint({
//     content: () => componentRef.current,
//   });

//   return (
//     <div className="pt-40">
//       <TableComponent
//         courseId={id}
//         courseName={courseName}
//         ref={(response) => (componentRef = response)}
//       />
//       {/* <ComponentToPrint
//         currentUserDetails={currentUser}
//         courseName="Andriod Studio"
//         ref={(response) => (componentRef = response)}
//       /> */}

//       <ReactToPrint
//         content={() => componentRef}
//         trigger={() => (
//           <button
//             onClick={handlePrint}
//             style={{ backgroundColor: "blue" }}
//             className="bg-blue-500 text-white p-2"
//           >
//             Print to PDF!
//           </button>
//         )}
//       />
//     </div>
//   );
// }

// export default ExportPdfComponent;
