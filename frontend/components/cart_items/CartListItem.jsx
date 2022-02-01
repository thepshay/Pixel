import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

class CartListItem extends React.Component {

  render() {
    const { item, deleteCartItem } = this.props
    console.log(item.cart_id)

    return (
      <div className='cart-item-container'>
        <div className='item-left'>
          <Link to={`/game/${item.game_id}`}>
            <img className='header-img' src={item.headerUrl} />
          </Link>
          <div className='title-container'>
            <Link to={`/game/${item.game_id}`}>
              <h2 className='title'>{item.title}</h2>
            </Link>
          </div>
        </div>
        <div className='item-right'>
          <p className='windows'><i className="fab fa-windows"></i></p>
          <div className='price-container'>
            <div className='price'>{`$${item.price}`}</div>
            <div className='remove' onClick={()=>deleteCartItem(item.cart_id)}>Remove</div>
          </div>
        </div>
      </div>
    )
  }
}

export default CartListItem;