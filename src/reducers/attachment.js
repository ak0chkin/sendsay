import {ADD_ATTACHMENT, ATTACHMENT_ERROR, DELETE_ATTACHMENT} from "../constants/actionTypes";

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = {
    'attaches': [],
    'error': ''
}, action) => {
    switch (action.type) {
        case ADD_ATTACHMENT:
            return {
                ...state,
                'attaches': [...state.attaches, action.payload]
            }
        case DELETE_ATTACHMENT:
            return {
                ...state,
                'attaches': [...state.attaches.filter(item => item !== action.payload)]
            }
        case ATTACHMENT_ERROR:
            return {
                ...state,
                'error': action.payload
            }
        default:
            return state;
    }
}