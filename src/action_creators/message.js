import {ADD_MESSAGE, UPDATE_STATUS} from "../constants/actionTypes";

export const addMessage = (message) => ({type: ADD_MESSAGE, payload: message});
export const updateStatus = (status) => ({type: UPDATE_STATUS, payload: status});