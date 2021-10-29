import { ActionTypes } from "../constants/actionTypes";
import { fetchPackageDetails, getAllotedPackage } from "../../api";

export const getPackage = () => async (dispatch) => {
  const response = await fetchPackageDetails();
  const res = await response.data?.data;

  dispatch({
    type: ActionTypes.GET_PACKAGE,
    payload: res,
  });
};

export const fetchAllotedPackage = (userId) => async (dispatch) => {
  try {
    const response = await getAllotedPackage(userId);
    dispatch({
      type: ActionTypes.GET_ALLOTED_PACKAGE,
      payload: response.data?.data,
    });
  } catch (error) {
    console.log(error);
  }
};

// export const getPackageDetails = ()=> async (dispatch) =>{
//   const response = await fetchPackageDetails()
//   const res = response.data?.data;

//   dispatch({
//     type:ActionTypes.GET_PACKAGE,
//     payload:res
//   })
// }
