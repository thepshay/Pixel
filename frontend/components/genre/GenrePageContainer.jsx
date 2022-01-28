import { connect } from "react-redux";
import GenrePage from './GenrePage';
import {fetchAllGames} from '../../actions/game_actions'

const mapStateToProps = (state, ownProps) => {
  const genre = ownProps.match.params.genreName;

  return {
    genreId: state.entities.genre[genre],
    games: state.entities.games
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAllGames: () => dispatch(fetchAllGames())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(GenrePage)