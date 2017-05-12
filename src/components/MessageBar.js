import React, {Component} from 'react';
import {connect} from 'react-redux';
import {sendFirebaseMessage} from './../actions/messages';

const inputStyle = {borderRadius: 10, border: 'none', fontSize: 16, padding: 10, marginRight: 10, flexGrow: 1};
const buttonStyle = {borderRadius: 10, cursor: 'pointer', fontSize: 20, color: '#336E7B', fontWeight: 'bold', padding: 10, flexGrow: 1, border: '3px solid #336E7B', backgroundColor: 'transparent'};

class MessageBar extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {message: ''};
  }

  handleChange(e) {
    this.setState({ message: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();

    if (this.state.message !== '') {
      this.props.sendFirebaseMessage(this.state.message, 'shinework');
      this.setState({ message: '' });
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} style={{display: 'flex', padding: 10}}>
        <input value={this.state.message} onChange={this.handleChange} placeholder="Votre message" type="text" style={inputStyle} />
        <br />
        <button type="submit" style={buttonStyle}>Envoyer</button>
      </form>
    )
  }
}

const mapDispatchToProps = {
  sendFirebaseMessage
};


const connectComponent = connect(null, mapDispatchToProps);

export default connectComponent(MessageBar);
