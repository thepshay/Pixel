import { RECEIVE_ALL_CART_ITEMS, RECEIVE_CART_ITEM } from "../actions/cart_item_actions";
import { LOGOUT_CURRENT_USER } from "../actions/session_actions";

const cartItemReducer = (state={}, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_ALL_CART_ITEMS:
      return action.cartItems;
    case RECEIVE_CART_ITEM:
      return {
        ...state,
        [action.cartItem.cart_id]: action.cartItem
      }
    case LOGOUT_CURRENT_USER:
      return {};
    default:
      return state;
  }
}

export default cartItemReducer;