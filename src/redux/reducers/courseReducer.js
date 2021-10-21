import { ActionTypes } from "../constants/actionTypes";

const initialState = {
  courseList: [],
  userDetails: [],
  chapterList: [],

};

export const courseReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.GET_COURSE_LIST:
      return { ...state, courseList: payload };
    case ActionTypes.GET_USER_DETAILS:
      return { ...state, userDetails: payload };
    case ActionTypes.GET_CHAPTER_LIST:
        return{...state, chapterList: payload };

    default:
      return state;
  }
};
