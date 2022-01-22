import {
  RECEIVE_CURRENT_USER,
  LOGOUT_CURRENT_USER,
  RECEIVE_SESSION_ERRORS
} from '../actions/session_actions';

// null session, default value when no user is logged in
const nullSession = {
  currentUserId: null
}

const sessionReducer = (state=nullSession, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return {
        currentUserId: action.currentUser.id
      };
    case LOGOUT_CURRENT_USER:
      return nullSession;
    default:
      return state;
  }
}

export default sessionReducer;