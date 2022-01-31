export const RECEIVE_ALL_CART_ITEMS = 'RECEIVE_ALL_CART_ITEMS';
export const RECEIVE_CART_ITEM = 'RECEIVE_CART_ITEM';
export const REMOVE_CART_ITEM = 'REMOVE_CART_ITEM';
export const RECEIVE_CART_ITEM_ERRORS = 'RECEIVE_CART_ITEM_ERRORS'

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

const receiveCartErrors = (errors) => {
  return {
    type: RECEIVE_CART_ITEM_ERRORS,
    errors
  }
}

export const fetchAllCartItems = () => (dispatch) => {
  return CartItemUtilApi.fetchAllCartItems()
    .then((items) => {
      dispatch(receiveAllCartItems(items))
    }, (errors) => {
      dispatch(receiveCartErrors(errors.responseJSON))
    })
}

export const createCartItem = (item) => (dispatch) => {
  return CartItemUtilApi.postCartItem(item)
    .then((payload) => {
      dispatch(receiveCartItem(payload))
    }, (errors) => {
      dispatch(receiveCartErrors(errors.responseJSON))
    })
}

export const deleteCartItem = (itemId) => (dispatch) => {
  return CartItemUtilApi.deleteCartItem(itemId)
    .then((items) => {
      dispatch(receiveAllCartItems(items))
    }, (errors) => {
      dispatch(receiveCartErrors(errors.responseJSON))
    })
}