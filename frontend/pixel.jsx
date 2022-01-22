import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/Root'
import * as SessionApiUtil from './util/session_api_util'

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');

  ReactDOM.render(<Root />, root);
  window.login = SessionApiUtil.login;
  window.signup = SessionApiUtil.signup;
  window.logout = SessionApiUtil.logout;
})