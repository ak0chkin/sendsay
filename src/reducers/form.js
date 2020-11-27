import {ADD_ATTACHMENT, DELETE_ATTACHMENT, UPDATE_FIELD, WIPE_FIELDS} from "../constants/actionTypes";

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
        case WIPE_FIELDS:
            return {
                'subject': '',
                'from.name': '',
                'from.email': '',
                'to.name': '',
                'mca': '',
                'message': '',
                'attaches': []
            }
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
        default:
            return state;
    }
}