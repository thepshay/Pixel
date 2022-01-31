import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/Root'
import configureStore from './store/store';

// testings
import * as SessionApiUtil from './util/session_api_util'
import * as SessionAction from './actions/session_actions'
import * as GameAction from './actions/game_actions'
import * as CartApiUtil from './util/cart_api_util'

import * as CartAction from './actions/cart_item_actions'

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

  window.fetchAllGames = GameAction.fetchAllGames;
  window.fetchGame = GameAction.fetchGame;

  // window.fetchAllCartItems = CartApiUtil.fetchAllCartItems;
  // window.postCartItem = CartApiUtil.postCartItem;
  // window.deleteCartItem = CartApiUtil.deleteCartItem;

  window.fetchAllCartItems = CartAction.fetchAllCartItems;
  window.createCartItem = CartAction.createCartItem;
  window.deleteCartItem = CartAction.deleteCartItem;
})