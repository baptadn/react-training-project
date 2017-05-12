import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import MessageItem from './MessageItem';
import {loadMessages, addMessage} from './../actions/messages';

const listStyle = {borderColor: 'grey', padding: 10, listStyle: 'none', 'height': 400, 'overflow': 'scroll'};

export default class MessageList extends Component {

  componentDidUpdate() {
    const messagesContainer = ReactDOM.findDOMNode(this.messagesContainer);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
  };

  render() {
    return (<ul ref={el => {this.messagesContainer = el;}} className="messagelist" style={listStyle}>
      {this.props.messages.map((message, i) => {
        return <MessageItem key={i} index={i} message={message}/>
      })}

      {this.props.isPending && <li>✨ Chargement en cours ✨</li>}

      {!this.props.isPending && this.props.messages.length === 0 && <li>Pas de message 🎈</li>}
    </ul>)
  }
}
