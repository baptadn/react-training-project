import React from 'react';
import PropTypes from 'prop-types';
import { Emojione } from 'react-emoji-render';



const MessageList = ({message}) => {
  return (
    <li style={{ marginBottom: 10, backgroundColor: 'white', padding: 10, borderRadius: 10}}>
      <small>@{message.username}</small>
      <div><Emojione text={message.body} /></div>
    </li>
  );
}

MessageList.propTypes = {
  message: PropTypes.object.isRequired,
};

export default MessageList;
