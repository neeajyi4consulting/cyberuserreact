import { ActionTypes } from "../constants/actionTypes";

const initialState ={
    chapterDetails:[],
    chapterId:3,
    chapterstatus:null,
    chapterInfo:null,
}

export const chapterReducer = (state= initialState, {type, payload})=>{
    switch (type) {
        case ActionTypes.GET_CHAPTER_DETAILS:
            return { ...state, chapterDetails:payload}
        case ActionTypes.CHAPTER_ID_STORED:
            return{...state, chapterId:payload}
        case ActionTypes.GET_CHAPTER_INFO:
            return{...state, chapterInfo:payload}
    
        default:
            return{state}
    }
}