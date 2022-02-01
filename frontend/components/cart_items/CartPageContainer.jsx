import {connect} from 'react-redux';
import { fetchAllCartItems } from '../../actions/cart_item_actions';

import CartPage from './CartPage';

const mapStateToProps = (state) => {
  return {
    cart: Object.values(state.entities.cart)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAllCartItems: () => dispatch(fetchAllCartItems())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartPage)