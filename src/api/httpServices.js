import axios from "axios";
// import { baseURL } from "@env";

export const baseURL = "https://rupalibhargava.pythonanywhere.com";

axios.defaults.baseURL = baseURL;

function setJwt(jwt) {
  axios.defaults.headers.authorization = `Bearer ${jwt}`;
}

// axios.defaults.headers.common["Authorization"] =
//   "Basic Y3liZXJmcmF0OjAyNjg2NjMyNmE5ZDFkMmIyMzIyNmU0ZTg5MjkxOTJns";
// axios.defaults.headers.common["Content-Type"] = "multipart/form-data";

const http = {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
  setJwt,
};

export default http;
