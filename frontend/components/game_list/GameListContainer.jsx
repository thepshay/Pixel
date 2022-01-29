import { connect } from 'react-redux';
import {fetchAllGames} from '../../actions/game_actions'
import GameList from './GameList';



const mapStateToProps = (state, ownProps) => {
  const gameListGames = ownProps.displayGameId.map(id =>{
    return state.entities.games[id]
  })
  return {
    games: gameListGames,
    className: ownProps.className,
    infoBox: ownProps.infoBox,
    source: ownProps.source
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAllGames: () => dispatch(fetchAllGames())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(GameList)