import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/Root'
import configureStore from './store/store';

// testings
import * as ReviewApiUtil from './util/review_api_utils'

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

  //test
  window.store = store;
  window.dispatch = store.dispatch;
  window.getState = store.getState;

  window.fetchAllReviews = ReviewApiUtil.fetchAllReviews;
  window.postReview = ReviewApiUtil.postReview;
  window.updateReview = ReviewApiUtil.updateReview;
  window.deleteReview = ReviewApiUtil.deleteReview;
})