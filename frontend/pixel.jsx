import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/Root'
import configureStore from './store/store';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');

  let store;
  if (window.currentUser) {
    const preloadedState = {
      session: { 'currentUser': window.currentUser},
      entities: {
        users: { [window.currentUser.id]: window.currentUser }
      }
    };
    store = configureStore(preloadedState)
  } else {
    store = configureStore()
  }

  ReactDOM.render(<Root store={store}/>, root);
})