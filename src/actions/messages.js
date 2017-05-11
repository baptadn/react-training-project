import React from 'react';
import firebase from './../services/firebase'
import * as action from '../constants/action';

export const sendMessage = (message, username) => {
  firebase.database().ref('messages').push({
    message,
    username,
  });

  return {type: action.SEND_MESSAGE_ACTION};
};

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
  return dispatch => {
    dispatch({type: action.LOAD_MESSAGES_PENDING_ACTION});

    firebase.database().ref('/messages').once('value').then(snapshot => {
      dispatch({
        type: action.LOAD_MESSAGES_SUCCESS_ACTION,
        messages: Object.values(snapshot.val()),
      })
    }).catch(error => {
      dispatch({type: action.LOAD_MESSAGES_ERROR_ACTION, error: error});
    });
  }
}
