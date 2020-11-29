import {combineReducers} from "redux";
import form from "./reducers/form";
import message from "./reducers/message";
import attachment from "./reducers/attachment";

export default combineReducers({attachment, form, message});