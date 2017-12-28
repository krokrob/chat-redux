import React, {Component} from 'react';
import moment from 'moment-timezone';
import { hashCode } from '../helpers/strToHex';
import { intToRGB } from '../helpers/strToHex'
import {emojify} from 'react-emojione';

class Message extends Component {
  render() {
    const style = {color: `#${intToRGB(hashCode(this.props.message.author))}`};
    return(
      <div className="message">
        <div className="message-header">
          <span
            className="message-author"
            style={style} >
            <strong>{emojify(this.props.message.author, {output: 'unicode'})} </strong>
          </span>
          - {moment(this.props.message.createdAt).format('h:mm:ss')}
        </div>
        <div className="message-content">
          {emojify(this.props.message.content, {output: 'unicode'})}
        </div>
      </div>
    );
  }
}

export default Message;
