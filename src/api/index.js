import http from "./httpServices";
import API_PATH from "./config";
import { getJWT } from "../utils/storage";
// import { getJWT } from "../utils/storage";

//to get and set JWT
export async function getAndSetJwt() {
  http.setJwt(getJWT());
}

//api token
const apiToken =
  "Basic Y3liZXJmcmF0OjAyNjg2NjMyNmE5ZDFkMmIyMzIyNmU0ZTg5MjkxOTJn";

//api for login
export async function loginUser(data) {
  return http.post(API_PATH.apiUserLogin, data, {
    headers: {
      "Content-Type": "multipart/form-data",
      Accept: "*/*",
      Authorization: apiToken,
    },
  });
}

//api for adding new user or signup
export async function addUser(data) {
  return await http.post(API_PATH.apiAddUser, data, {
    headers: {
      "Content-Type": "multipart/form-data",
      Accept: "*/*",
      Authorization: apiToken,
    },
  });
}

//api to change user password
export async function changePassword(data) {
  return http.post(API_PATH.apiChangePassword, data, {
    headers: {
      "Content-Type": "multipart/form-data",
      Accept: "*/*",
      "Accept-Encoding": "gzip, deflate, br",
      Authorization: apiToken,
    },
  });
}

//api to reset forgotten password
export async function forgetPass(data) {
  return http.post(API_PATH.apiForgetPassword, data, {
    headers: {
      "Content-Type": "multipart/form-data",
      Accept: "*/*",
      Authorization: apiToken,
    },
  });
}

//api to edit user details
export async function editUserDetails(data) {
  return http.post(API_PATH.apiEditUser, data, {
    headers: {
      "Content-Type": "multipart/form-data",
      Accept: "*/*",
      Authorization: apiToken,
    },
  });
}

//api to get user details based on userid
export async function getUserDetails(userID) {
  return http.get(API_PATH.apiGetUser + userID, {
    headers: {
      Authorization: apiToken,
    },
  });
}

//api to fetch all membership/package
export async function fetchPackageDetails() {
  return http.get(API_PATH.showPackage, {
    headers: {
      Authorization: apiToken,
    },
  });
}

//get courses from alloted membership/package based on user id
export async function getAllotedPackage(userId) {
  return http.get(API_PATH.apiShowClientPackage + userId, {
    headers: {
      Authorization: apiToken,
    },
  });
}

//api to get courses in membership/package based on package Id
export async function showPackageCourse(data) {
  return await http.post(API_PATH.apiShowPackageCourse, data, {
    headers: {
      "Content-Type": "multipart/form-data",
      Accept: "*/*",
      Authorization: apiToken,
    },
  });
}

//allot purchased membership/package
export async function allotPackage(data) {
  return await http.post(API_PATH.apiAllotPackage, data, {
    headers: {
      "Content-Type": "multipart/form-data",
      Accept: "*/*",
      Authorization: apiToken,
    },
  });
}

//api for buying membership/package or course
export async function buyPackage(data) {
  return await http.post(API_PATH.apiBuyPackage, data, {
    headers: {
      "Content-Type": "multipart/form-data",
      Accept: "*/*",
      Authorization: apiToken,
    },
  });
}

//allot course after purchasing
export async function allotCourse(data) {
  return await http.post(API_PATH.apiAllotCourse, data, {
    headers: {
      "Content-Type": "multipart/form-data",
      Accept: "*/*",
      Authorization: apiToken,
    },
  });
}

//api to get all courses
export async function getCourseList() {
  return http.get(API_PATH.apiCourseList, {
    headers: {
      Authorization: apiToken,
    },
  });
}

//get details of courses based on courseid
export async function getCourseDetails(idStored) {
  return http.get(API_PATH.apiCourseDetails + "/" + idStored, {
    headers: {
      Authorization: apiToken,
    },
  });
}

//get chapter based on course
export async function fetchChapterClientList(data) {
  return http.post(API_PATH.apiChapterClientList, data, {
    headers: {
      "Content-Type": "multipart/form-data",
      Accept: "*/*",
      Authorization: apiToken,
    },
  });
}

//fetch quiz based on couse id
export async function fetchquiz(chapterId) {
  return http.get(API_PATH.apiQuizList + chapterId, {
    headers: {
      Authorization: apiToken,
    },
  });
}

//api to check answer and get score of quiz
export async function checkAnswer(data) {
  return http.post(API_PATH.apiAnswerCheck, data, {
    headers: {
      "Content-Type": "multipart/form-data",
      Accept: "*/*",
      Authorization: apiToken,
    },
  });
}

//api to get list of chapter based on course id
export async function getChapterList(courseId) {
  return http.get(API_PATH.apiChapterList + "/" + courseId, {
    headers: {
      Authorization: apiToken,
    },
  });
}

//get details of chapter based on chapter list
export async function getChapterDetails(idStored) {
  return http.get(API_PATH.apiChapterDetails + "/" + idStored, {
    headers: {
      Authorization: apiToken,
    },
  });
}

//get status of chapter
export async function getChapterStatus(data) {
  return http.post(API_PATH.apiGetChapterStatus, data, {
    headers: {
      "Content-Type": "multipart/form-data",
      Accept: "*/*",
      Authorization: apiToken,
    },
  });
}

//change status of chapter
export async function changeChapterStatus(data) {
  return http.post(API_PATH.apiChangeChapterStatus, data, {
    headers: {
      "Content-Type": "multipart/form-data",
      Accept: "*/*",
      Authorization: apiToken,
    },
  });
}

//api to get event list
export async function getEventList() {
  return http.get(API_PATH.apiEventList, {
    headers: {
      Authorization: apiToken,
    },
  });
}

//api to get list of banner for carousel/banner/slider
export async function getBannerList() {
  return http.get(API_PATH.apiBannerList, {
    headers: {
      Authorization: apiToken,
    },
  });
}

//api to send query/feedback form landing page
export async function addQuery(data) {
  return http.post(API_PATH.apiAddQuery, data, {
    headers: {
      "Content-Type": "multipart/form-data",
      Accept: "*/*",
      Authorization: apiToken,
    },
  });
}

//api to add certificate download data
export async function addCertificate(data) {
  return http.post(API_PATH.apiAddCertificate, data, {
    headers: {
      "Content-Type": "multipart/form-data",
      Accept: "*/*",
      Authorization: apiToken,
    },
  });
}

export async function getServiceList() {
  return http.get(API_PATH.apiServiceList, {
    headers: {
      Authorization: apiToken,
    },
  });
}

export async function fetchCategoryList() {
  return http.get(API_PATH.apiCategoryList, {
    headers: {
      Authorization: apiToken,
    },
  });
}
