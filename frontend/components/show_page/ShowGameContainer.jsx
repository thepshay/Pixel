import { connect, connectAdvanced } from "react-redux";
import { fetchGame } from "../../actions/game_actions";
import ShowGame from './ShowGame'

const mapStateToProps= (state, ownProps) => {
  return {
    gameId: ownProps.match.params.gameId,
    game: state.entities.games[ownProps.match.params.gameId]
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchGame: (id) => dispatch(fetchGame(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShowGame)