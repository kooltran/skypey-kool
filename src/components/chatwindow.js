import React from "react";
import Header from './header';
import store from '../store/store'
import Chat from './chat';
import MessageInput from '../containers/message-input'
import './ChatWindow.css'
import _ from "lodash";

const ChatWindow = ({ activeUserId }) => {
  const state = store.getState();
  const activeUser = state.contacts[activeUserId];
  const activeMsgs = state.messages[activeUserId];
  const { typing, editMessage } = state;
  console.log(state)
  return (
    <div className="ChatWindow">
      <Header user={activeUser} />
      <Chat messages={_.values(activeMsgs)} activeUserId={activeUserId}/>
      {/*<MessageInput value={editMessage.value ? editMessage.value : typing} number={editMessage.idMessage && editMessage.idMessage} />*/}
    </div>
  );
};

export default ChatWindow;