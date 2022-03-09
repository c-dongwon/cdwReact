import { combineReducers } from "redux";
import subscibersReducer from "./subscribers/reducer";
import viewReducer from "./views/reducer";
import commentsReducer from "./comments/reducer";

const rootReducer = combineReducers({
    views:viewReducer,
    subscribers:subscibersReducer,
    comments:commentsReducer
})

export default rootReducer