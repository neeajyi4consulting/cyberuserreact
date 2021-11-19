import { combineReducers } from "redux";
import { authReducer } from "./authReducer";
import { chapterReducer } from "./chapterReducer";
import { courseReducer } from "./courseReducer";
import { packageReducer } from "./packageReducer";

const reducers = combineReducers({
  user: authReducer,
  course: courseReducer,
  packages: packageReducer,
  chapter: chapterReducer,
});

export default reducers;
