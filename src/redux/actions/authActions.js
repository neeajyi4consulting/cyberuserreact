import {
  setJWT,
  cleanLocalStorage,
  getUserInfoFromJWT,
} from "../../utils/storage";
import { loginUser, editUserDetails } from "../../api";
import { ActionTypes } from "../constants/actionTypes";
import { toast } from "react-toastify";

export const loginAction = (data) => async (dispatch) => {
  const response = await loginUser(data);

  if (response.data?.status === true) {
    // console.log(response.data?.data)
    await setJWT(response?.data?.data?.token);
    toast.success("Login Successfull");
  } else {
    toast.error("Invalid Email or Password");
  }
  const userData = await getUserInfoFromJWT();

  dispatch({
    type: ActionTypes.LOGIN,
    payload: userData,
  });
};

export const fetchUserAction = () => async (dispatch) => {
  const token = await getUserInfoFromJWT();

  dispatch({
    type: ActionTypes.FETCH_CURRENTUSER,
    payload: token,
  });
};

export const logout = () => async (dispatch) => {
  dispatch({ type: ActionTypes.LOGOUT, payload: { loading: true } });
  cleanLocalStorage();
  toast.success("Logout Successfull");

  dispatch({
    type: ActionTypes.LOGOUT,
    payload: null,
  });
};

export const editDetails = (data) => async (dispatch) => {
  const response = await editUserDetails(data);
  toast.info(response.data.message);

  if (response.data.status === true) {
    console.log("admin function clg done!");
  } else {
    console.log(response);
  }

  dispatch({
    type: ActionTypes.EDIT_DETAILS,
    payload: response,
  });
};
