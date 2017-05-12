import React, {Component} from 'react';
import {connect} from 'react-redux';
import MessageListContainer from './../containers/MessageListContainer';
import Chat from "./../components/Chat";
import {loadMessages, addMessage} from "./../actions/messages";
import {updateChatColor} from "./../actions/settings";
import firebase from "./../services/firebase";

class ChatContainer extends Component {
  componentDidMount() {
    this.props.loadMessages();

    firebase.database().ref('messages').on('child_added', snapshot => {
      const {message, username} = snapshot.val();
      this.props.addMessage(message, username);
    });
  }

  render() {
    return <Chat {...this.props} />
  }
}

const mapStateToProps = (state) => {
  return {
    colorCode: state.settings.colorCode,
  }
};

const mapDispatchToProps =  {
  loadMessages,
  addMessage,
  updateChatColor
};

const connectComponent = connect(mapStateToProps, mapDispatchToProps);
export default connectComponent(ChatContainer);
