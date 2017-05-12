import React from 'react';
import { combineReducers } from 'redux';
import messages from './messages';
import settings from './settings';

export default combineReducers({
  message: messages,
  settings: settings,
});
