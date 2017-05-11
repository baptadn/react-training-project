import React from 'react';
import { combineReducers } from 'redux';
import messages from './messages';

export default combineReducers({
  message: messages
});
