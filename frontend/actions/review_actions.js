export const RECEIVE_ALL_REVIEWS = 'RECEIVE_ALL_REVIEWS';
export const RECEIVE_REVIEW = 'RECEIVE_REVIEW';

import * as ReviewApiUtil from '../util/review_api_utils';

const receiveAllReviews = (reviews) => {
  return {
    type: RECEIVE_ALL_REVIEWS,
    reviews
  }
}

const receiveReview = (review) => {
  return {
    type: RECEIVE_REVIEW,
    review
  }
}

export const fetchAllReviews = (gameId) => (dispatch) => {
  // debugger
  return ReviewApiUtil.fetchAllReviews(gameId)
    .then((reviews) => {
      dispatch(receiveAllReviews(reviews))
    })
}

export const createReview = (review) => (dispatch) => {
  return ReviewApiUtil.postReview(review)
    .then((payload) => {
      dispatch(receiveReview(payload))
    })
}

export const updateReview = (review) => (dispatch) => {
  return ReviewApiUtil.updateReview(review)
    .then((payload) => {
      dispatch(receiveReview(payload))
    })
}

export const deleteReview = (reviewId, gameId) => (dispatch) => {
  return ReviewApiUtil.deleteReview(reviewId, gameId)
    .then((reviews) => {
      dispatch(receiveAllReviews(reviews))
    })
}