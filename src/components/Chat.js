import React from 'react';
import MessageListContainer from './../containers/MessageListContainer';
import MessageBar from "./MessageBar";
import { TwitterPicker } from 'react-color';

const chatStyle = {borderRadius: 10, fontFamily: 'Montserrat', width: 400, padding: 10, display: 'flex', flexDirection: 'column'};

export default props => {
  return (
    <div style={{...chatStyle, backgroundColor: props.colorCode}}>
      <div style={{paddingLeft: 10, paddingTop: 10, fontSize: 30}}>👅 JoliChat</div>

      <MessageListContainer />
      <MessageBar />

      <div style={{padding: 10}}>
        <TwitterPicker onChangeComplete={color => props.updateChatColor(color.hex)} />
      </div>

    </div>
    )
}
