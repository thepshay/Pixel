import { RECEIVE_REVIEW, RECEIVE_REVIEW_ERRORS } from "../actions/review_actions";
import { LOGOUT_CURRENT_USER } from "../actions/session_actions";

const reviewErrorsReducer = (state=[], action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_REVIEW_ERRORS:
      return action.errors;
    case RECEIVE_REVIEW:
      return [];
    case LOGOUT_CURRENT_USER:
      return [];
    default: 
      return state;
  }
}

export default reviewErrorsReducer;