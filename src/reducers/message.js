import {ADD_MESSAGE} from "../constants/actionTypes";

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = {messages: []}, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            return {
                messages: [...state.messages, action.payload]
            }
        default:
            return state;
    }
}