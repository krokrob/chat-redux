import React, {Component} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { fetchMessages } from '../actions/index';
import Message from '../components/Message';
import MessageForm from '../containers/MessageForm';

class MessageList extends Component {
  componentWillMount() {
    this.props.fetchMessages(this.props.selectedChannel);
  }

  componentDidMount() {
    const intervalId = setInterval(() => this.props.fetchMessages(this.props.selectedChannel), 5000);
  }

  componentWillUnmount() {
    intervalId.clearInterval;
  }

  componentDidUpdate() {
    const height = this.refs.messageList.scrollHeight;
    this.refs.messageList.scrollTop = height;
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.selectedChannel !== this.props.selectedChannel) {
      this.props.fetchMessages(nextProps.selectedChannel);
    }
  }

  render() {
    return(
      <div className="channel">
        <h4><strong>Channel #{this.props.selectedChannel}</strong></h4>
        <div className="message-list" ref="messageList" >
          {this.props.messages.map( (message) =>
            <Message message={message} key={message.createdAt} />)}
        </div>
        <MessageForm />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    messages: state.messages,
    selectedChannel: state.selectedChannel
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { fetchMessages: fetchMessages },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(MessageList);
