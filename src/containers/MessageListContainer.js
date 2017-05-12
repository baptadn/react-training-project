import React from 'react';
import {connect} from 'react-redux';
import MessageList from './../components/MessageList';

const mapStateToProps = function(state) {
  return {
    messages: state.message.messages,
    isPending: state.message.isPending,
  }
};

export default connect(mapStateToProps)(MessageList);
