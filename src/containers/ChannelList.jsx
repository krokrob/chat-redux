import React, {Component} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { selectChannel } from '../actions/index';

class ChannelList extends Component {
  handleClick = (channel, e) => {
    this.props.selectChannel(channel);
  }

  render() {
    return(
      <div className="channels">
        <h4><strong>Redux Chat</strong></h4>
        <ul className="list-unstyled">
          {this.props.channels.map((channel) => {
            const active = channel === this.props.selectedChannel ? ' active' : '';
            return <li className={active}
                        onClick={(e) => this.handleClick(channel, e)}
                        key={channel} >#{channel}</li>
          })}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    channels: state.channels,
    selectedChannel: state.selectedChannel
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { selectChannel: selectChannel },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(ChannelList);
