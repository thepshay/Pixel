import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/Root'

// testings
import * as SessionApiUtil from './util/session_api_util'
import * as SessionAction from './actions/session_actions'

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');

  ReactDOM.render(<Root />, root);

  //test
  window.signup = SessionAction.signup;
  window.login = SessionAction.login;
  window.logout = SessionAction.logout;

})