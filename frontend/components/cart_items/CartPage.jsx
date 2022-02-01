import React from "react";

class CartPage extends React.Component {

  componentDidMount() {
    this.props.fetchAllCartItems();
  }

  render() {

    const {cart} = this.props

    console.log(cart)

    if (!cart) {
      return null;
    }

    //Sort the cart to display in order of added to cart. 
    const sortedGames = cart.sort((a,b) => (a.cart_id > b.cart_id) ? 1 : -1)

    return (
      <ul>
        {sortedGames.map((game, index) => {
          return <li key={index}>{game.title}</li>
        })}
      </ul>
    )
  }
}

export default CartPage;