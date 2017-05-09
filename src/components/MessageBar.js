import React, {Component} from 'react';
import PropTypes from 'prop-types';

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

  handleSubmit() {
    if (this.state.message !== '') {
      this.props.handleMessageSubmit(this.state.message);
      this.setState({ message: '' });
    }
  }

  render() {
    return (
      <div style={{display: 'flex', padding: 10}}>
        <input value={this.state.message} onChange={this.handleChange} placeholder="Votre message" type="text" style={inputStyle} />
        <br />
        <button onClick={this.handleSubmit} style={buttonStyle}>Envoyer</button>
      </div>
    )
  }
}

MessageBar.propTypes = {
  handleMessageSubmit: PropTypes.func.isRequired,
};

export default MessageBar;
