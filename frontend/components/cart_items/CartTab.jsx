import React from "react";

class CartTab extends React.Component {

  componentDidMount() {
    this.props.fetchAllCartItems();
  }

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