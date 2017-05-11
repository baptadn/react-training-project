import React from 'react';
import axios from 'axios';
import * as action from '../constants/action';

export const addMessage = (message, username) => {
  return {
    type: action.ADD_MESSAGE_ACTION,
    message,
    username,
  };
};

export const removeMessage = index => {
  return {
    type: action.REMOVE_MESSAGE_ACTION,
    index,
  };
};

export const loadMessages = () => {
  return (dispatch) => {
    dispatch({type: action.LOAD_MESSAGES_PENDING_ACTION});

    return axios.get('http://www.mocky.io/v2/5914c6af100000ae0f9a5c1a')
      .then(response => {
        dispatch({
          type: action.LOAD_MESSAGES_SUCCESS_ACTION,
          messages: response.data.messages
        });
      }).catch(error => {
        dispatch({type: action.LOAD_MESSAGES_ERROR_ACTION, error: error});
      });
  };
};
