import { connect } from "react-redux";
import { fetchAllGames } from "../../util/game_api_util";
import GameList from './GameList';

const GAME_LIST_ID = [2,3,4,5,10,11,12,14,15,16];

const mapStateToProps = (state, ownProps) => {
  const gameListGames = GAME_LIST_ID.map(id => {
    return state.entities.games[id];
  });

  return {
    games: gameListGames,
    className: ownProps.className
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAllGames: () => dispatch(fetchAllGames())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(GameList)