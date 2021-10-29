import { ActionTypes } from "../constants/actionTypes";

const intialState = {
  packageDetails: [],
  allotedPackage: [],
};

export const packageReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.GET_PACKAGE:
      return { ...state, packageDetails: payload };
    case ActionTypes.GET_ALLOTED_PACKAGE:
      return { ...state, allotedPackage: payload };

    default:
      return { state };
  }
};
