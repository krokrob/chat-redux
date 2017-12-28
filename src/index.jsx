// external modules
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { logger } from 'redux-logger';
import reduxPromise from 'redux-promise';

// internal modules
import App from './components/app';
import '../assets/stylesheets/application.scss';
import messagesReducer from './reducers/messagesReducer';
import channelsReducer from './reducers/channelsReducer';
import selectedChannelReducer from './reducers/selectedChannelReducer';
import currentUserReducer from './reducers/currentUserReducer';

const initialState = {
  messages: [
    {
      "author":"seb",
      "content":"Hello world!",
      "createdAt":"2017-09-26T23:03:16.365Z"
    },
    {
      "author":"edward",
      "content":"My name is anonymous77",
      "createdAt":"2017-09-26T23:03:21.194Z"
    }
  ],
  channels: ['general', 'react', 'paris'],
  selectedChannel: 'general',
  currentUser: prompt('Username?')
};

// State and reducers
const reducers = combineReducers({
  messages: messagesReducer,
  channels: channelsReducer,
  selectedChannel: selectedChannelReducer,
  currentUser: currentUserReducer
});

const middlewares = applyMiddleware(logger, reduxPromise);

// render an instance of the component in the DOM
ReactDOM.render(
  <Provider store={createStore(reducers, initialState, middlewares)}>
    <App />
  </Provider>,
  document.getElementById('root')
);
