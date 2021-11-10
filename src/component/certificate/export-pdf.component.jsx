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
  const storedData = useSelector((state)=>state);
  const { user, course } = storedData;
  const currentUser = user?.currentUser
  const userDetail = user?.userDetails
  const courseDetail = course?.detailsOfCourse

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