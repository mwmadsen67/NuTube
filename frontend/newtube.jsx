import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import * as SessionApiUtil from './util/session_api_util';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  const store = configureStore();
  ///////// testing only! //////////
  window.signup = SessionApiUtil.signup;
  window.signin = SessionApiUtil.signin;
  window.signout = SessionApiUtil.signout;
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  ///////// testing only! //////////
  ReactDOM.render(<Root store={ store } />, root);
});