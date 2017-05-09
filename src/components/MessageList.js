import React, {Component} from 'react';
import MessageItem from './MessageItem';

class MessageList extends Component {
  constructor(props) {
    super(props);
    this.state = {messages: [
      {body: 'Qui à faim ?', username: 'shinework'},
      {body: 'Moi on mange où ?', username: 'babar'},
      {body: 'Je ne sais pas :(', username: 'bob'},
    ]};
  }

  render() {
    return (<ul style={{borderColor: 'grey', padding: 10, listStyle: 'none'}}>
      {this.state.messages.map((message, i) => {
        return <MessageItem key={i} message={message} />
      })}
    </ul>)
  }
}

export default MessageList;
