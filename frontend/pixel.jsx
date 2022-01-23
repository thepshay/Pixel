import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/Root'
import configureStore from './store/store';

// testings
import * as SessionApiUtil from './util/session_api_util'
import * as SessionAction from './actions/session_actions'

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');

  let store;
  if (window.currentUser) {
    const preloadedState = {
      session: { 'currentUser': window.currentUser}
    };
    store = configureStore(preloadedState)
  } else {
    store = configureStore()
  }

  ReactDOM.render(<Root store={store}/>, root);

  //test
  window.store = store;
  window.dispatch = store.dispatch;
  window.getState = store.getState;

  window.signup = SessionAction.signup;
  window.login = SessionAction.login;
  window.logout = SessionAction.logout;

})