import React from 'react';
import { ADD_MESSAGE_ACTION, REMOVE_MESSAGE_ACTION } from './../constants/action'


const INITIAL_STATE = {
  messages: [],
};

const messages = (state = INITIAL_STATE, action) => {

  switch (action.type) {
    case ADD_MESSAGE_ACTION:
      return {
        messages: [...state.messages, {message: action.message, username: action.username}]
      };

    case REMOVE_MESSAGE_ACTION:
      return {
        messages: state.messages.filter((message, i) => i !== action.index)
      };

    default:
      return state
  }
};

export default messages;
