import { RECEIVE_ALL_REVIEWS, RECEIVE_REVIEW } from "../actions/review_actions";

const reviewReducer = (state={}, action) => {
  Object.freeze(state);
  // debugger
  switch(action.type) {
    case RECEIVE_ALL_REVIEWS:
      return action.reviews;
    case RECEIVE_REVIEW: 
      return {
        ...state,
        [action.review.user_id]: action.review
      }
    default:
      return state;
  }
}

export default reviewReducer;