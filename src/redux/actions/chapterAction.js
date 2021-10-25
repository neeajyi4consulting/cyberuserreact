import { getChapterDetails } from "../../api";
import { ActionTypes } from "../constants/actionTypes";

export const fetchChapterDetails= (id) => async (dispatch) =>{
    try {
        const response = await getChapterDetails(id)
        // console.log("this is from action", response.data.chapters)
        dispatch({
            type:ActionTypes.GET_CHAPTER_DETAILS,
            payload:response.data?.data,
        })
    } catch (error) {
        console.log(error)
    }
}

export const chapterIdStored = (id) => async (dispatch) =>{
    try {
    await    dispatch({
            type:ActionTypes.CHAPTER_ID_STORED,
            payload:id
        })
    } catch (error) {
        console.log(error)
    }
}

export const chapterDetails = (id) => async (dispatch) =>{

    const response = await getChapterDetails(id);

    dispatch({
        type:ActionTypes.GET_CHAPTER_INFO,
        payload:response.data?.data,
    })
}