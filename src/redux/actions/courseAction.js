import { ActionTypes } from "../constants/actionTypes";
import { getCourseDetails, getCourseList, getUserDetails } from "../../api";

export const getCourse = () => async (dispatch) =>{
    try {
        const response = await getCourseList()
        dispatch({
            type:ActionTypes.GET_COURSE_LIST,
            payload:response.data?.data,
        })
        
    } catch (error) {
        console.log(error)
    }
    
}



export const fetchUserDetails = (id) => async (dispatch) =>{
    try {
        const response = await getUserDetails(id)
        dispatch({
            type:ActionTypes.GET_USER_DETAILS,
            payload:response.data?.data.alloted_courses,
        })
    } catch (error) {
        console.log(error)
    }
}

// export const chapterDetails= (id) => async (dispatch) =>{
//     try {
//         const response = await getCourseDetails(id)
//         // console.log("this is from action", response.data.chapters)
//         dispatch({
//             type:ActionTypes.GET_CHAPTER_DETAILS,
//             payload:response.data?.chapters,
//         })
//     } catch (error) {
//         console.log(error)
//     }
// }

export const fetchChapterList= (id) => async (dispatch) =>{
    try {
        const response = await getCourseDetails(id)
        // console.log("this is from action", response.data.chapters)
        dispatch({
            type:ActionTypes.GET_CHAPTER_LIST,
            payload:response.data?.chapters,
        })
    } catch (error) {
        console.log(error)
    }
}

