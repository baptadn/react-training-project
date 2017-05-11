import React, {Component} from 'react';
import MessageItem from './MessageItem';
import {loadMessages} from './../actions/messages';
import {connect} from 'react-redux';

class MessageList extends Component {
  componentDidMount() {
    this.props.loadMessages();
  }

  render() {
    return (<ul style={{borderColor: 'grey', padding: 10, listStyle: 'none'}}>
      {this.props.messages.map((message, i) => {
        return <MessageItem key={i} index={i} message={message} />
      })}
      {this.props.pending && <li>Chargement 🚀</li>}
      {!this.props.pending && this.props.messages.length === 0 && <li>Pas de message 🎈</li>}
    </ul>)
  }
}

const mapStateToProps = (state) => {
  return {
    messages: state.message.messages,
    pending: state.message.pending,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    loadMessages: () => {
      dispatch(loadMessages())
    }
  }
};

const connectComponent = connect(mapStateToProps, mapDispatchToProps);

export default connectComponent(MessageList);
