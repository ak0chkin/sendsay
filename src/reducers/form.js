import {ADD_ATTACHMENT, UPDATE_FIELD} from "../constants/actionTypes";

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = {
    'subject': '',
    'from.name': '',
    'from.email': '',
    'to.name': '',
    'mca': '',
    'message': '',
    'attaches': []
}, action) => {
    switch (action.type) {
        case UPDATE_FIELD:
            return {
                ...state,
                [action.payload.name]: action.payload.value
            }
        case ADD_ATTACHMENT:
            return {
                ...state,
                'attaches': [...state.attaches, action.payload]
            }
        default:
            return state;
    }
}