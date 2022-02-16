import { RECEIVE_CART_ITEM_ERRORS } from "../actions/cart_item_actions";
import { LOGOUT_CURRENT_USER } from "../actions/session_actions";

const cartItemErrorsReducer = (state=[], action) => {
  Object.freeze(state);
  
  switch (action.type) {
    case RECEIVE_CART_ITEM_ERRORS:
      return action.errors;
    case LOGOUT_CURRENT_USER:
      return [];
    default:
      return state;
  }
}

export default cartItemErrorsReducer;