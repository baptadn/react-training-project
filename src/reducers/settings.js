import React from 'react';
import * as types from './../constants/action'


const INITIAL_STATE = {
  colorCode: '#A2DED0',
};

const settings = (state = INITIAL_STATE, action) => {

  switch (action.type) {
    case types.UPDATE_CHAT_COLOR:
        return {...state, colorCode: action.colorCode};

    default:
      return state
  }
};

export default settings;
