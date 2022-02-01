import React from "react";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";

class AddToCartDisplay extends React.Component {

  render() {
    const {game, action, alreadyPurchased} = this.props

    return (
      <div className="add-to-cart-container">
        <h2 className="title">{`Buy ${game.title}`}</h2>
        <p className='windows'><i className="fab fa-windows"></i></p>
        <div className="action-container">
          <div className="price">{`$${game.price}`}</div>
          <button 
            className="add-to-cart-btn"
            onClick={action}>
            {alreadyPurchased ? 'In Cart' : 'Add to Cart'}
          </button>
        </div>
      </div>
    )
  }
}

export default AddToCartDisplay;