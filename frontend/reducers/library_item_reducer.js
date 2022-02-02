import { RECEIVE_ALL_LIBRARY_ITEMS, RECEIVE_LIBRARY_ITEM } from "../actions/library_item_actions";
import { LOGOUT_CURRENT_USER } from "../actions/session_actions";

const libraryItemReducer = (state = {}, action) => {
  Object.freeze(state);
  debugger
  switch(action.type) {
    case RECEIVE_ALL_LIBRARY_ITEMS:
      return action.libraryItems;
    case RECEIVE_LIBRARY_ITEM:
      return {
        ...state,
        [action.libraryItem.game_id]: action.libraryItem
      }
    case LOGOUT_CURRENT_USER:
      return {};
    default:
      return state;
  }
}

export default libraryItemReducer;