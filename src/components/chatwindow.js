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
  const { typing } = state;
  console.log(_.values(activeMsgs))

  return (
    <div className="ChatWindow">
      <Header user={activeUser} />
      <Chat messages={_.values(activeMsgs)} />
      <MessageInput value={typing} />
    </div>
  );
};

export default ChatWindow;