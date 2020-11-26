import {ADD_MESSAGE, UPDATE_STATUS} from "../constants/actionTypes";

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = {messages: []}, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            return {
                messages: [...state.messages, action.payload]
            }
        case UPDATE_STATUS:
            return {
                messages: state.messages.map(item => item.trackId === action.payload.trackId ? {
                    ...item,
                    'status': action.payload.status
                } : item)
            }
        default:
            return state;
    }
}