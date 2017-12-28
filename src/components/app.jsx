import React from 'react';
import MessageList from '../containers/MessageList';
import ChannelList from '../containers/ChannelList';

const App = () => {
  return (
    <div className="app">
      <div className="teams">
        <div className="team">
          <img
            src="https://kitt.lewagon.com/assets/favicon-9e84d1cd6dffd89d572b8c6a542cadda0b2091f8fc65f9cc1f09f09ca363bb19.png"
            alt=""
            className="img-circle" />
        </div>
      </div>
      <ChannelList />
      <MessageList />
    </div>
  );
};

export default App;
