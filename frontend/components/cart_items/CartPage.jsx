import React from "react";
import Cart from "./Cart";

class CartPage extends React.Component {

  componentDidMount() {
    if (this.props.cart.length === 0) {
      this.props.fetchAllCartItems();
    } 
  }

  calcTotal(array) {
    let sum = 0;
    array.forEach(item => {
      sum += item.price
    });
    return sum
  }

  render() {
    const {cart, deleteCartItem} = this.props


    //Sort the cart to display in order of added to cart. 
    const sortedCart = cart.sort((a,b) => (a.cart_id > b.cart_id) ? 1 : -1)
    return (
      <div className="cart-page">
        <div className="cart-main-content">
          <h1 className="title">YOUR SHOPPING CART</h1>
          {cart.length > 0 &&
            <Cart 
              cart={sortedCart}
              deleteCartItem={deleteCartItem}
            />
          }
          <div className="cart-summary">
            <div className="estimate">
              <div>Estimated total</div>
              <div>{`$${this.calcTotal(cart)}`}</div>
            </div>
            <div className="checkout">
              <button className="purchase" onClick={() => deleteCartItem('all')}>
                Purchase for myself
              </button>
            </div>
          </div>
          {cart.length > 0 &&
            <div className="remove-all" onClick={() => deleteCartItem('all')}>Remove all items</div>
          }
        </div>
      </div>
    )
  }
}

export default CartPage;