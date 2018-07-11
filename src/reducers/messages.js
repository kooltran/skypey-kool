import { getMessages } from "../static-data";
import { SEND_MESSAGE, DELETE_MESSAGE, EDIT_MESSAGE } from "../constants/action-types";
import _ from 'lodash'

export default function messages(state = getMessages(10), action) {
    switch (action.type) {
        case SEND_MESSAGE:
            const { message, messageNumb, userId } = action.payload;
            const allUserMsgs = state[userId];
            let number, is_edited;
            if (messageNumb) {
                number = messageNumb,
                is_edited = true
            } else {
                number = +_.keys(allUserMsgs).pop() + 1;
                is_edited = false
            }

            return {
                ...state,
                [userId]: {
                    ...allUserMsgs,
                    [number]: {
                        number,
                        text: message,
                        is_user_msg: true,
                        is_msg_edited: is_edited
                    }
                }
            };
        case DELETE_MESSAGE:
            const { userIdDel, messageNumbDel }  = action.payload;
            const allUserMsgsDel = state[userIdDel];
            delete allUserMsgsDel[messageNumbDel];

            return {
                ...state,
                [userIdDel]: {
                    ...allUserMsgsDel
                }
            };
        case EDIT_MESSAGE:
            console.log(action)
            // return action.payload
        default:
            return state;
    }
}