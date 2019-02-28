import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import * as Action from './actions/session_actions';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  let store;
  if (window.currentUser) {
    const preloadedState = {
      entities: {
        users: { [window.currentUser.id]: window.currentUser }
      },
      session: { id: window.currentUser.id }
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }
  ///////// testing only! //////////
  window.signup = Action.signup;
  window.signin = Action.signin;
  window.signout = Action.signout;
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  ///////// testing only! //////////
  ReactDOM.render(<Root store={ store } />, root);
});