import React from "react";

class AddToCartDisplay extends React.Component {

  handleClick(e, item) {
    this.props.createCartItem(item)
  }

  render() {
    const {game, createCartItem, currentUser} = this.props

    const item = {
      user_id: currentUser.id,
      game_id: game.id
    }

    console.log(createCartItem)
    return (
      <div className="add-to-cart-container">
        <h2>{`Buy ${game.title}`}</h2>
        <p className='windows'><i className="fab fa-windows"></i></p>
        <div className="action-container">
          <div className="price">{`$${game.price}`}</div>
          <button 
            className="add-to-cart-btn"
            onClick={(e) => this.handleClick(e, item)}>
            Add To Cart
          </button>
        </div>
      </div>
    )
  }
}

export default AddToCartDisplay;