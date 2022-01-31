import { connect } from "react-redux";
import { fetchAllCartItems } from "../../actions/cart_item_actions";
import CartTab from "./CartTab";

const mapStateToProps = (state) => {
  console.log(state.entities.cart)
  console.log(Object.keys(state.entities.cart).length)
  return {
    numItems: Object.keys(state.entities.cart).length
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAllCartItems: () => dispatch(fetchAllCartItems())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartTab)