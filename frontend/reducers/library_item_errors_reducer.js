import { RECEIVE_LIBRARY_ERRORS } from '../actions/library_item_actions';
import { LOGOUT_CURRENT_USER } from '../actions/session_actions';

const libraryItemErrorsReducer = (state=[], action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_LIBRARY_ERRORS:
      return action.errors;
    case LOGOUT_CURRENT_USER:
      return [];
    default:
      return state;
  }
}

export default libraryItemErrorsReducer;