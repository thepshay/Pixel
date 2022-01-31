export const RECEIVE_ALL_CART_ITEMS = 'RECEIVE_ALL_CART_ITEMS';
export const RECEIVE_CART_ITEM = 'RECEIVE_CART_ITEM';
export const REMOVE_CART_ITEM = 'REMOVE_CART_ITEM';

import * as CartItemUtilApi from '../util/cart_api_util';

const receiveAllCartItems = (cartItems) => {
  return {
    type: RECEIVE_ALL_CART_ITEMS,
    cartItems
  }
}

const receiveCartItem = (cartItem) => {
  return {
    type: RECEIVE_CART_ITEM,
    cartItem
  }
}

const removeCartItem = (cartId) => {
  return {
    type: REMOVE_CART_ITEM,
    cartId
  }
}

export const fetchAllCartItems = () => (dispatch) => {
  return CartItemUtilApi.fetchAllCartItems()
    .then((items) => dispatch(receiveAllCartItems(items)))
}

export const createCartItem = (item) => (dispatch) => {
  return CartItemUtilApi.postCartItem(item)
    .then((payload) => dispatch(receiveCartItem(payload)))
}

export const deleteReport = (itemId) => (dispatch) => {
  return CartItemUtilApi.deleteCartItem(itemId)
    .then((items) => dispatch(receiveAllCartItems(items)))
}