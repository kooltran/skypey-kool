import React from "react";
import store from "../store/store";
import { setTypingValue, sendMessage, editMessage } from "../actions";
import "./MessageInput.css";

const MessageInput = ({ value, number, isMsgEdited }) => {
    const state = store.getState();
    const inputRef = React.createRef();
    const handleChange = e => {
        store.dispatch(setTypingValue(e.target.value));
        store.dispatch(editMessage(e.target.value, number));
    };

    const handleSubmit = e => {
        e.preventDefault();
        const { activeUserId } = state;
        if (/\S/.test(value)) {
            const chatMsgs = value.replace(/\s\s+/g, ' ');
            store.dispatch(sendMessage(chatMsgs, number, activeUserId));
        }
    };
    return (
        <form className="Message" onSubmit={handleSubmit}>
            <input
                ref={inputRef}
                className="Message__input"
                onChange={handleChange}
                value={value}
                placeholder="write a message"
            />
        </form>
    );
};

export default MessageInput;