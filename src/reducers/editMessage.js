import { EDIT_MESSAGE, SEND_MESSAGE, SET_ACTIVE_USER_ID } from "../constants/action-types";

export default function editMessage(state = "", action) {
    console.log(action)
    switch (action.type) {
        case EDIT_MESSAGE:
            return action.payload;
        case SET_ACTIVE_USER_ID:
            return '';
        case SEND_MESSAGE:
            return ''
        default:
            return state;
    }
}