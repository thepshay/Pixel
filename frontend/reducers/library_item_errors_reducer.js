import { RECEIVE_LIBRARY_ERRORS } from '../actions/library_item_actions';

const libraryItemErrorsReducer = (state=[], action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_LIBRARY_ERRORS:
      return action.errors;
    default:
      return state;
  }
}

export default libraryItemErrorsReducer;