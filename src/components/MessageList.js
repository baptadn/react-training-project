import React from 'react';
import MessageItem from './MessageItem';
import {connect} from 'react-redux';

const MessageList = ({messages}) => {
  return (<ul style={{borderColor: 'grey', padding: 10, listStyle: 'none'}}>
    {messages.map((message, i) => {
      return <MessageItem key={i} index={i} message={message} />
    })}
    {messages.length === 0 && <li>Pas de message 🎈</li>}
  </ul>)
}

const mapStateToProps = (state) => {
  return {
    messages: state.message.messages
  }
};

const connectComponent = connect(mapStateToProps);

export default connectComponent(MessageList);
