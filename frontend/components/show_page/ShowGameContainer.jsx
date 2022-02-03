import { connect } from "react-redux";
import { createCartItem } from "../../actions/cart_item_actions";
import { fetchGame } from "../../actions/game_actions";
import {fetchAllCartItems} from '../../actions/cart_item_actions'
import ShowGamePage from './ShowGamePage'
import { fetchAllReviews } from "../../actions/review_actions";

const mapStateToProps= (state, ownProps) => {

  return {
    currentUser: state.session.currentUser,
    gameId: ownProps.match.params.gameId,
    game: state.entities.games[ownProps.match.params.gameId],
    cart: state.entities.cart,
    library: state.entities.library,
    reviews: state.entities.reviews
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchGame: (id) => dispatch(fetchGame(id)),
    createCartItem: (item) => dispatch(createCartItem(item)),
    fetchAllCartItems: () => dispatch(fetchAllCartItems()),
    fetchAllReviews: (gameId) => dispatch(fetchAllReviews(gameId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShowGamePage)