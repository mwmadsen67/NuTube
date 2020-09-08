import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import * as Action from './actions/video_actions';

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

  window.store = store
  // logout dropdown
  window.onclick = function(event) {
    let ele = document.getElementById('dropdown');
    if (ele.classList.contains('open')) {
      if (!event.target.matches('.greeting-user-btn') && !event.target.matches('.ddmenu')) {
        ele.classList.remove('open');
      }
    }
  }
  ReactDOM.render(<Root store={ store } />, root);
});