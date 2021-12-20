import { ActionTypes } from "../constants/actionTypes";
import {
  checkAnswer,
  fetchChapterClientList,
  fetchquiz,
  getAllotedPackage,
  getCourseDetails,
  getCourseList,
  getUserDetails,
  addCertificate,
  showPackageCourse,
  fetchPackageDetails,
} from "../../api";

//fetch all courses regardless of membership/package
export const getCourse = () => async (dispatch) => {
  try {
    dispatch({ type: ActionTypes.LOADING, payload: true });
    const response = await getCourseList();
    dispatch({
      type: ActionTypes.GET_COURSE_LIST,
      payload: response.data?.data,
    });
    dispatch({ type: ActionTypes.LOADING, payload: false });
  } catch (error) {
    console.log(error);
  }
};

//fetch user details on id
export const fetchUserDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: ActionTypes.LOADING, payload: true });
    const response = await getUserDetails(id);
    console.log("this is response from fetch user", response);
    dispatch({
      type: ActionTypes.GET_USER_DETAILS,
      payload: response.data?.data?.alloted_courses,
    });
    dispatch({ type: ActionTypes.LOADING, payload: false });
  } catch (error) {
    console.log(error);
  }
};

//fetch list of chapter in a course based on courseID
export const fetchCourseDetails = (courseId) => async (dispatch) => {
  try {
    dispatch({ type: ActionTypes.LOADING, payload: true });
    const response = await getCourseDetails(courseId);
    dispatch({
      type: ActionTypes.GET_COURSE_DETAILS,
      payload: response.data?.data?.chapters,
    });
    dispatch({ type: ActionTypes.LOADING, payload: false });
  } catch (error) {
    console.log(error);
  }
};

//fetch details of courses based on course id
export const courseDetails = (courseId) => async (dispatch) => {
  try {
    dispatch({ type: ActionTypes.LOADING, payload: true });
    const response = await getCourseDetails(courseId);
    dispatch({
      type: ActionTypes.DETAILS_OF_COURSE,
      payload: response.data?.data,
    });
    dispatch({ type: ActionTypes.LOADING, payload: false });
  } catch (error) {
    console.log(error);
  }
};

//fetch courses in alloted membership/package
export const allotedPackageDetaile = (userId) => async (dispatch) => {
  try {
    dispatch({ type: ActionTypes.LOADING, payload: true });
    const response = await getAllotedPackage(userId);
    dispatch({
      type: ActionTypes.GET_ALLOTED_PACKAGE,
      payload: response.data?.data,
    });
    dispatch({ type: ActionTypes.LOADING, payload: false });
  } catch (error) {
    console.log(error);
  }
};

//fetch quiz based on course Id
export const getQuiz = (courseId) => async (dispatch) => {
  dispatch({ type: ActionTypes.LOADING, payload: true });
  try {
    const response = await fetchquiz(courseId);
    dispatch({
      type: ActionTypes.GET_QUIZ,
      payload: response.data?.data,
    });
  } catch (error) {
    console.log(error);
  }
  dispatch({ type: ActionTypes.LOADING, payload: false });
};

// check quiz result based on course id and quiz id
export const checkResult = (data) => async (dispatch) => {
  dispatch({ type: ActionTypes.LOADING, payload: true });
  const response = await checkAnswer(data);
  dispatch({
    type: ActionTypes.GET_QUIZ_RESULT,
    payload: response,
  });
  dispatch({ type: ActionTypes.LOADING, payload: false });
};

//store answer before submiting quiz
export const checkScore = (data) => async (dispatch) => {
  try {
    dispatch({
      type: ActionTypes.CHECK_SCORE,
      payload: data,
    });
  } catch (error) {
    console.log(error);
  }
};

// get details like course complete status, quiz passed status and quiz completed
export const getChapterClientList = (data) => async (dispatch) => {
  dispatch({ type: ActionTypes.LOADING, payload: true });
  try {
    const response = await fetchChapterClientList(data);
    dispatch({
      type: ActionTypes.CHAPTER_CLIENT_LIST,
      payload: response.data,
    });
  } catch (error) {
    console.log(error);
  }
  dispatch({ type: ActionTypes.LOADING, payload: false });
};

//store course status  and quiz status
export const courseClientList = (data) => async (dispatch) => {
  try {
    dispatch({ type: ActionTypes.LOADING, payload: true });
    const response = await fetchChapterClientList(data);
    dispatch({
      type: ActionTypes.COURSE_CLIENT_LIST,
      payload: response?.data?.course_status,
    });
    dispatch({
      type: ActionTypes.QUIZCOMPLETED,
      payload: response?.data?.Quiz_Completed,
    });
    dispatch({ type: ActionTypes.LOADING, payload: false });
  } catch (error) {
    console.log(error);
  }
};

//add quary if certificate is downloaded
export const setCertificate = (data) => async (dispatch) => {
  try {
    const response = await addCertificate(data);
    dispatch({ type: ActionTypes.ADDCERTIFICATE, payload: response });
  } catch (error) {
    console.log(error);
  }
};

//show courses in membership/package
export const showPackagesInCourse = (data) => async (dispatch) => {
  try {
    const response = await showPackageCourse(data);
    // console.log("this is respose from action", response?.data)
    dispatch({
      type: ActionTypes.GET_PACKAGE_COURSE,
      payload: response?.data?.data,
    });
  } catch (error) {
    console.log(error);
  }
};

//get all membership/packages
export const getPackage = () => async (dispatch) => {
  const response = await fetchPackageDetails();
  const res = await response.data?.data;

  dispatch({
    type: ActionTypes.GET_PACKAGE,
    payload: res,
  });
};

//fetch list of courses in gold membership/package
export const goldPackage = (data) => async (dispatch) => {
  const response = await showPackageCourse(data);
  // console.log("this is response from aciton", response)
  dispatch({
    type: ActionTypes.GOLD_PACKAGE_COURSES,
    payload: response?.data?.data,
  });
};

//fetch list of courses in plus membership/package
export const plusPackage = (data) => async (dispatch) => {
  const response = await showPackageCourse(data);
  // console.log("this is response from aciton", response)
  dispatch({
    type: ActionTypes.PLUS_PACKAGE_COURSES,
    payload: response?.data?.data,
  });
};
