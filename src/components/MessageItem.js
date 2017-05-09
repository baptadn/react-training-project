import React, {Component} from 'react';

const MessageList = () => {
  return (
    <li style={{ marginBottom: 10, backgroundColor: 'white', padding: 10, borderRadius: 10}}>
      <small>@username</small>
      <div>Message item</div>
    </li>
  );
}

export default MessageList;
