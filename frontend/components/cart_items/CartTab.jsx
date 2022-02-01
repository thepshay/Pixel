import React from "react";

class CartTab extends React.Component {

  render() {
    const { numItems } = this.props;
    return (
      <div className="cart-tab">
        CART ({numItems})
      </div>
    )
  }
}

export default CartTab;