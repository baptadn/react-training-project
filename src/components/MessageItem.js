import React from 'react';
import { Emojione } from 'react-emoji-render';
import { removeMessage } from './../actions/messages';
import {connect} from 'react-redux';

const MessageItem = ({message, onRemoveMessage, index}) => {
  return (
    <li style={{position: 'relative', marginBottom: 10, backgroundColor: 'white', padding: 10, borderRadius: 10}}>
      <small>@{message.username}</small>
      <div><Emojione text={message.message} /></div>
      <small onClick={() => onRemoveMessage(index)} style={{position: 'absolute', right: 10, top: 5, cursor: 'pointer'}}>❌</small>
    </li>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    onRemoveMessage: index => {
      dispatch(removeMessage(index))
    }
  }
};

export default connect(null, mapDispatchToProps)(MessageItem);
