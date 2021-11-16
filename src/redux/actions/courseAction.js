import { ActionTypes } from "../constants/actionTypes";
import {
  checkAnswer,
  fetchChapterClientList,
  fetchquiz,
  getAllotedPackage,
  getCourseDetails,
  getCourseList,
  getUserDetails,
  addCertificate
} from "../../api";

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

export const fetchUserDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: ActionTypes.LOADING, payload: true });
    const response = await getUserDetails(id);
    dispatch({
      type: ActionTypes.GET_USER_DETAILS,
      payload: response.data?.data?.alloted_courses,
    });
    dispatch({ type: ActionTypes.LOADING, payload: false });
  } catch (error) {
    console.log(error);
  }
};

export const fetchCourseDetails = (courseId) => async (dispatch) => {
  try {
    dispatch({ type: ActionTypes.LOADING, payload: true });
    const response = await getCourseDetails(courseId);
    // console.log(response.data);
    dispatch({
      type: ActionTypes.GET_COURSE_DETAILS,
      payload: response.data?.data?.chapters,
    });
    dispatch({ type: ActionTypes.LOADING, payload: false });
  } catch (error) {
    console.log(error);
  }
};

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
    console.log("this is test eerrror", error);
  }
};

export const getQuiz = (courseId) => async (dispatch) => {
  try {
    dispatch({ type: ActionTypes.LOADING, payload: true });
    const response = await fetchquiz(courseId);
    // console.log("get quiz from action", response)
    dispatch({
      type: ActionTypes.GET_QUIZ,
      payload: response.data?.data,
    });
    dispatch({ type: ActionTypes.LOADING, payload: false });
  } catch (error) {}
};

export const checkResult = (data) => async (dispatch) => {
  const response = await checkAnswer(data);
  // console.log("action response from course", response?.data?.data?.score);
  dispatch({
    type: ActionTypes.GET_QUIZ_RESULT,
    payload: response.data,
  });
};

export const checkScore = (data) => async (dispatch) => {
  // console.log("action scores", data);
  try {
    dispatch({
      type: ActionTypes.CHECK_SCORE,
      payload: data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const getChapterClientList = (data) => async (dispatch) => {
  try {
    dispatch({ type: ActionTypes.LOADING, payload: true });
    const response = await fetchChapterClientList(data);
    // console.log("response", response?.data);
    dispatch({
      type: ActionTypes.CHAPTER_CLIENT_LIST,
      payload: response.data,
    });
    dispatch({ type: ActionTypes.LOADING, payload: false });
  } catch (error) {
    console.log(error);
  }
};

export const courseClientList = (data) => async (dispatch) => {
  try {
    dispatch({ type: ActionTypes.LOADING, payload: true });
    const response = await fetchChapterClientList(data);
    // console.log("response from course Client list", response?.data?.course_status);
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

export const setCertificate = (data) => async (dispatch) =>{
  try {
    const response = await addCertificate(data);
    console.log("this is test alert for certificate", response)
    dispatch({type:ActionTypes.ADDCERTIFICATE, payload:response})
  } catch (error) {
    console.log(error)
  }
}
