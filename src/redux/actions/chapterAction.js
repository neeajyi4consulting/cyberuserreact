import { getChapterDetails, changeChapterStatus, getChapterStatus } from "../../api";
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

export const ChapterStatus = (data) => async (dispatch) =>{
    const response = await changeChapterStatus(data);
    console.log("this is clg from action chpaterChange", response.data)

    dispatch({
        type:ActionTypes.CHANGE_CHAPTER_STATUS,
    })
}

export const getStatusOfChapter = (data) => async (dispatch) =>{
    const response = getChapterStatus(data);
    console.log("this is response from action",(await response).data);

    dispatch({
        type:ActionTypes.GET_CHAPTER_STATUS,
        payload:response
    })
}

export const chapterDetails = (id) => async (dispatch) =>{

    const response = await getChapterDetails(id);

    dispatch({
        type:ActionTypes.GET_CHAPTER_INFO,
        payload:response.data?.data,
    })
}