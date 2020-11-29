import {ADD_ATTACHMENT, DELETE_ATTACHMENT} from "../constants/actionTypes";

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = {
    'attaches': []
}, action) => {
    switch (action.type) {
        case ADD_ATTACHMENT:
            return {
                'attaches': [...state.attaches, action.payload]
            }
        case DELETE_ATTACHMENT:
            return {
                ...state,
                'attaches': [...state.attaches.filter(item => item !== action.payload)]
            }
        default:
            return state;
    }
}