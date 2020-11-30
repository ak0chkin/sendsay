import {combineReducers} from "redux";
import message from "./reducers/message";
import attachment from "./reducers/attachment";
import {reducer as reduxFormReducer} from 'redux-form'

export default combineReducers({attachment, form: reduxFormReducer, message});