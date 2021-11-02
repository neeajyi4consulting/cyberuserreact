import { ActionTypes } from "../constants/actionTypes";
import {
  checkAnswer,
  fetchChapterClientList,
  fetchquiz,
  getAllotedPackage,
  getCourseDetails,
  getCourseList,
  getUserDetails,
} from "../../api";

export const getCourse = () => async (dispatch) => {
  try {
    const response = await getCourseList();
    dispatch({
      type: ActionTypes.GET_COURSE_LIST,
      payload: response.data?.data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const fetchUserDetails = (id) => async (dispatch) => {
  try {
    const response = await getUserDetails(id);
    dispatch({
      type: ActionTypes.GET_USER_DETAILS,
      payload: response.data?.data.alloted_courses,
    });
  } catch (error) {
    console.log(error);
  }
};

export const fetchCourseDetails = (courseId) => async (dispatch) => {
  try {
    const response = await getCourseDetails(courseId);
    // console.log(response)
    dispatch({
      type: ActionTypes.GET_COURSE_DETAILS,
      payload: response.data?.data?.chapters,
    });
  } catch (error) {
    console.log(error);
  }
};

export const courseDetails = (courseId) => async (dispatch) => {
  try {
    const response = await getCourseDetails(courseId);
    // console.log(response)
    dispatch({
      type: ActionTypes.COURSE_DETAILS,
      payload: response.data?.data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const allotedPackageDetails = (userId) => async (dispatch) => {
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

export const getQuiz = (courseId) => async (dispatch) => {
  try {
    const response = await fetchquiz(courseId);
    dispatch({
      type: ActionTypes.GET_QUIZ,
      payload: response.data?.data,
    });
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
    // console.log("response", response?.data?.data[0]?.name?.link);
    dispatch({
      type: ActionTypes.CHAPTER_CLIENT_LIST,
      payload: response.data?.data,
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
