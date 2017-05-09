import React from 'react';
import PropTypes from 'prop-types';

const MessageList = ({message}) => {
  return (
    <li style={{ marginBottom: 10, backgroundColor: 'white', padding: 10, borderRadius: 10}}>
      <small>@{message.username}</small>
      <div>{message.body}</div>
    </li>
  );
}

MessageList.propTypes = {
  message: PropTypes.object.isRequired,
};

export default MessageList;
