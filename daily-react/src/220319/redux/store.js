import { createStore, applyMiddleware } from "redux";
import rootReducer from "./rootReducer";
import logger from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from "redux-thunk";

const middleware = [logger, thunk]
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middleware)))
//스프레드 연산자쓰면 껍데기제외한 내용물만 들어감

export default store;