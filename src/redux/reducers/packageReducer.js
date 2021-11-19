import { ActionTypes } from "../constants/actionTypes";

const intialState = {
  packageDetails: [],
  allotedPackage: [],
  addQuaries: null,
};

export const packageReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.GET_PACKAGE:
      return { ...state, packageDetails: payload };
    case ActionTypes.GET_ALLOTED_PACKAGE:
      return { ...state, allotedPackage: payload };
    case ActionTypes.ADD_QUERY:
      return { ...state, addQuaries: payload };

    default:
      return { state };
  }
};
