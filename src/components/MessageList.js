import React from 'react';
import MessageItem from './MessageItem';

const MessageList = ({messages}) => {
  return (<ul style={{borderColor: 'grey', padding: 10, listStyle: 'none'}}>
    {messages.map((message, i) => {
      return <MessageItem key={i} message={message} />
    })}
    {messages.length === 0 && <li>Pas de message 🎈</li>}
  </ul>)
}

export default MessageList;
