import { connect, connectAdvanced } from "react-redux";
import { createCartItem } from "../../actions/cart_item_actions";
import { fetchGame } from "../../actions/game_actions";
import ShowGamePage from './ShowGamePage'

const mapStateToProps= (state, ownProps) => {

  return {
    currentUser: state.session.currentUser,
    gameId: ownProps.match.params.gameId,
    game: state.entities.games[ownProps.match.params.gameId]
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchGame: (id) => dispatch(fetchGame(id)),
    createCartItem: (item) => dispatch(createCartItem(item))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShowGamePage)