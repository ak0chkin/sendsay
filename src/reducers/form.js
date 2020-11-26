import {ADD_ATTACHMENT, UPDATE_FIELD} from "../constants/actionTypes";

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = {
    'subject': 'Subject',
    'from.name': 'fromName',
    'from.email': 'from@email.com',
    'to.name': 'toName',
    'mca': 'mca@email.com',
    'message': 'Message',
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