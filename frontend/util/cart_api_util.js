export const fetchAllCartItems = () => {
  return $.ajax({
    method: 'GET',
    url: 'api/cart_items'
  })
}

export const postCartItem = (cart_item) => {
  return $.ajax({
    method: 'POST',
    url: 'api/cart_items',
    data: { cart_item }
  })
}

export const deleteCartItem = (cartId) => {
  return $.ajax({
    method: 'DELETE',
    url: `api/cart_items/${cartId}`
  })
}