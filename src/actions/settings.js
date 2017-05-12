import React from 'react';
import * as actions from '../constants/action';

export const updateChatColor = colorCode => {
  return {
    type: actions.UPDATE_CHAT_COLOR,
    colorCode,
  };
};
