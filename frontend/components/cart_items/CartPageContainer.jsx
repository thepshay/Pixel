import {connect} from 'react-redux';
import { fetchAllCartItems, deleteCartItem } from '../../actions/cart_item_actions';
import { createLibraryItem } from '../../actions/library_item_actions';

import CartPage from './CartPage';

const mapStateToProps = (state) => {
  return {
    cart: Object.values(state.entities.cart)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAllCartItems: () => dispatch(fetchAllCartItems()),
    deleteCartItem: (id) => dispatch(deleteCartItem(id)),
    createLibraryItem: (item) => dispatch(createLibraryItem(item))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartPage)