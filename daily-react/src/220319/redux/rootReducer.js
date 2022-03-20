import { combineReducers } from "redux";
import subReducer from "./sub/reducer";
import viewReducer from "./views/reducer";
import commentsReducer from "./comments/reducer";

const rootReducer = combineReducers({
    views:viewReducer,
    sub:subReducer,
    comments:commentsReducer
})

export default rootReducer