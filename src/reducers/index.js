import { combineReducers } from "redux";
import user from "./user";
import contacts from "./contacts";
import messages from "./messages";
import activeUserId from "./activeUserId";
import typing from "./typing";
import editMessage from './editMessage';
import deleteMessage from './deleteMessage';

export default combineReducers({
  user,
  messages,
  contacts,
  typing,
  activeUserId,
  // editMessage,
  // deleteMessage
});