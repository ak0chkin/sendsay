import {combineReducers} from "redux";
import form from "./reducers/form";
import message from "./reducers/message";

export default combineReducers({form, message});