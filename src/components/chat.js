import React, { Component } from "react";
import "./Chats.css";
import store from "../store/store";
import { editMessage, deleteMessage } from '../actions'

const Chat = ({ message, activeUserId }) => {
    const { text, is_user_msg, is_msg_edited } = message;
    return (
        <span className={`Chat ${is_user_msg ? "is-user-msg" : ""}  ${is_msg_edited ? 'is-user-edited' : ''}`} onDoubleClick={() => handleEditMessage(message)}>
            {text}
            {is_user_msg && <span className="btn-del-msg" onClick={() => handleDeleteMessage(message, activeUserId)}>x</span>}
        </span>
    );
};

function handleDeleteMessage(message, activeUserId) {
    const { number } = message;
    store.dispatch(deleteMessage(activeUserId, number))
}

function handleEditMessage(message) {
    const { number, is_user_msg, text } = message;
    console.log(is_user_msg, 'is_user_msg')
    if (is_user_msg) {
        store.dispatch(editMessage(text, number))
    }
}

class Chats extends Component {
    constructor(props) {
        super(props);
        this.chatsRef = React.createRef();
    }
    componentDidMount() {
        this.scrollToBottom();
    }
    componentDidUpdate() {
        this.scrollToBottom();
    }
    scrollToBottom = () => {
        this.chatsRef.current.scrollTop = this.chatsRef.current.scrollHeight;
    };

    render() {
        return (
        <div className="Chats" ref={this.chatsRef}>
            {this.props.messages.map(message => (
                <Chat message={message} key={message.number} activeUserId={this.props.activeUserId}/>
            ))}
        </div>
        );
    }
}

export default Chats;