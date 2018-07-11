import { SET_ACTIVE_USER_ID, SET_TYPING_VALUE, SEND_MESSAGE, EDIT_MESSAGE, DELETE_MESSAGE } from "../constants/action-types";

export const setActiveUserId = id => ({
  type: SET_ACTIVE_USER_ID,
  payload: id
});

export const setTypingValue = value => ({
  type: SET_TYPING_VALUE,
  payload: value
})
export const sendMessage = (message, messageNumb, userId) => ({
  type: SEND_MESSAGE,
  payload: {
    message,
    messageNumb,
    userId
  }
})
export const editMessage = (value, idMessage) => ({
  type: EDIT_MESSAGE,
  payload: {
    idMessage,
    value
  }
})

export const deleteMessage = (userIdDel, messageNumbDel) => ({
  type: DELETE_MESSAGE,
  payload: {
    userIdDel,
    messageNumbDel
  }
})