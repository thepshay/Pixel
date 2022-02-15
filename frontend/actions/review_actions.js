export const RECEIVE_ALL_REVIEWS = 'RECEIVE_ALL_REVIEWS';
export const RECEIVE_REVIEW = 'RECEIVE_REVIEW';
export const RECEIVE_REVIEW_ERRORS = 'RECEIVE_REVIEW_ERRORS'

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

const receiveReviewErrors = (errors) => {
  return {
    type: RECEIVE_REVIEW_ERRORS,
    errors
  }
}

export const fetchAllReviews = (gameId) => (dispatch) => {
  // debugger
  return ReviewApiUtil.fetchAllReviews(gameId)
    .then((reviews) => {
      dispatch(receiveAllReviews(reviews))
    }, errors => {
      dispatch(receiveReviewErrors(errors.responseJSON))
    });
}

export const createReview = (review) => (dispatch) => {
  return ReviewApiUtil.postReview(review)
    .then((payload) => {
      dispatch(receiveReview(payload))
    }, errors => {
      dispatch(receiveReviewErrors(errors.responseJSON))
    });
}

export const updateReview = (review) => (dispatch) => {
  return ReviewApiUtil.updateReview(review)
    .then((payload) => {
      dispatch(receiveReview(payload))
    }, errors => {
      dispatch(receiveReviewErrors(errors.responseJSON))
    });
}

export const deleteReview = (reviewId, gameId) => (dispatch) => {
  return ReviewApiUtil.deleteReview(reviewId, gameId)
    .then((reviews) => {
      dispatch(receiveAllReviews(reviews))
    }, errors => {
      dispatch(receiveReviewErrors(errors.responseJSON))
    });
}