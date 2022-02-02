import React from "react";
import CartListItem from "./CartListItem";

class Cart extends React.Component {


  render() {
    const { cart, deleteCartItem } = this.props;
    return (
      <ul className="cart-list">
        {cart.map((item, index) => {
          return <CartListItem
            key={index}
            item={item}
            deleteCartItem={deleteCartItem}
          />
        })}
      </ul>
    )
  }
}

export default Cart;