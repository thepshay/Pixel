import React from "react";
import CartListItem from "./CartListItem";

class CartPage extends React.Component {

  componentDidMount() {
    if (this.props.cart.length === 0) {
      this.props.fetchAllCartItems();
    } 
  }

  render() {
    const {cart, deleteCartItem} = this.props

    if (cart.length === 0) {
      return null;
    }

    //Sort the cart to display in order of added to cart. 
    const sortedCart = cart.sort((a,b) => (a.cart_id > b.cart_id) ? 1 : -1)

    return (
      <ul>
        {sortedCart.map((item, index) => {
          return (
            <CartListItem 
              key={index} 
              item={item} 
              deleteCartItem={deleteCartItem}
            />
          )
        })}
      </ul>
    )
  }
}

export default CartPage;