import { connect } from "react-redux";
import { createCartItem } from "../../actions/cart_item_actions";
import { fetchGame } from "../../actions/game_actions";
import { fetchAllLibraryItems } from '../../actions/library_item_actions'
import {fetchAllCartItems} from '../../actions/cart_item_actions'
import ShowGamePage from './ShowGamePage'

const mapStateToProps= (state, ownProps) => {

  return {
    currentUser: state.session.currentUser,
    gameId: ownProps.match.params.gameId,
    game: state.entities.games[ownProps.match.params.gameId],
    cart: state.entities.cart,
    library: state.entities.library
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchGame: (id) => dispatch(fetchGame(id)),
    createCartItem: (item) => dispatch(createCartItem(item)),
    fetchAllCartItems: () => dispatch(fetchAllCartItems()),
    fetchAllLibraryItems: (userId) => dispatch(fetchAllLibraryItems(userId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShowGamePage)