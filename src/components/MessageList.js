import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import MessageItem from './MessageItem';
import {loadMessages, addMessage} from './../actions/messages';
import firebase from './../services/firebase';
import {connect} from 'react-redux';

class MessageList extends Component {
  componentDidMount() {
    this.props.loadMessages();

    firebase.database().ref('messages').on('child_added', snapshot => {
      const {message, username} = snapshot.val();
      this.props.addMessage(message, username);
    });
  }

  componentDidUpdate() {
    const messagesContainer = ReactDOM.findDOMNode(this.messagesContainer);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
  };

  render() {
    return (<ul ref={el => { this.messagesContainer = el; }} style={{borderColor: 'grey', padding: 10, listStyle: 'none', height: 400, overflow: 'scroll'}}>
      {this.props.messages.map((message, i) => {
        return <MessageItem key={i} index={i} message={message} />
      })}
      {this.props.pending && <li>Chargement 🚀</li>}
      {!this.props.pending && this.props.messages.length === 0 && <li>Pas de message 🎈</li>}
    </ul>)
  }
}

const mapStateToProps = (state) => {
  return {
    messages: state.message.messages,
    pending: state.message.pending,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    loadMessages: () => {
      dispatch(loadMessages())
    },
    addMessage: (message, username) => {
      dispatch(addMessage(message, username))
    }
  }
};

const connectComponent = connect(mapStateToProps, mapDispatchToProps);

export default connectComponent(MessageList);
