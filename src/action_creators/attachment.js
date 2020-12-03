import {ADD_ATTACHMENT, ATTACHMENT_ERROR, DELETE_ATTACHMENT} from "../constants/actionTypes";

export const addAttachment = (attachment) => ({type: ADD_ATTACHMENT, payload: attachment});
export const deleteAttachment = (attachment) => ({type: DELETE_ATTACHMENT, payload: attachment});
export const updateAttachmentError = (error) => ({type: ATTACHMENT_ERROR, payload: error});