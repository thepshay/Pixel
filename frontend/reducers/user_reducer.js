import { LOGOUT_CURRENT_USER, RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_USER } from '../actions/user_actions';

const userReducer = (state={}, action) => {
  Object.freeze(state);
  
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return { [action.currentUser.id] : action.currentUser}
    case RECEIVE_USER:
      return {
        ...state,
        [action.user.id] : action.user
      }
    case LOGOUT_CURRENT_USER:
      return {};
    default:
      return state;
  }
}

export default userReducer;