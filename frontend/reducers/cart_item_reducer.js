import { RECEIVE_ALL_CART_ITEMS, RECEIVE_CART_ITEM } from "../actions/cart_item_actions";

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
    default:
      return state;
  }
}

export default cartItemReducer;