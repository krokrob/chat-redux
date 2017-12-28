import React, {Component} from 'react';
import moment from 'moment-timezone';
import { hashCode } from '../helpers/strToHex';
import { intToRGB } from '../helpers/strToHex'

class Message extends Component {
  render() {
    const style = {color: `#${intToRGB(hashCode(this.props.message.author))}`};
    return(
      <div className="message">
        <div className="message-header">
          <span
            className="message-author"
            style={style} >
            <strong>{this.props.message.author} </strong>
          </span>
          - {moment(this.props.message.createdAt).format('h:mm:ss')}
        </div>
        <div className="message-content">{this.props.message.content}</div>
      </div>
    );
  }
}

export default Message;
