import {combineReducers} from "redux";
import message from "./reducers/message";
import attachment from "./reducers/attachment";

export default combineReducers({attachment, message});