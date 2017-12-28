import React, {Component} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { createMessage } from '../actions/index';

class MessageForm extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    const content = this.refs.newMessage.value;
    this.props.createMessage(this.props.selectedChannel, this.props.currentUser, content);
    this.refs.newMessage.value = '';
  }

  render() {
    return(
      <form className="message-form" onSubmit={this.handleSubmit} >
        <input type="text" ref="newMessage" />
        <button>Send</button>
      </form>
    );
  }
}

function mapStateToProps(state) {
  return {
    selectedChannel: state.selectedChannel,
    currentUser: state.currentUser
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { createMessage: createMessage },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(MessageForm);
