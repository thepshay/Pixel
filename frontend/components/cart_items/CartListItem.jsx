import React from 'react';

class CartListItem extends React.Component {

  render() {
    const { item, deleteCartItem } = this.props
    console.log(item.cart_id)

    return (
      <div className='cart-item-container'>
        <div className='item-left'>
          <img className='header-img' src={item.headerUrl} />
          <h2 className='title'>{item.title}</h2>
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