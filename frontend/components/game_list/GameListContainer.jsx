import { connect } from 'react-redux';
import {fetchAllGames} from '../../actions/game_actions'
import GameList from './GameList';



const mapStateToProps = (state, ownProps) => {
  return {
    games: state.entities.games,
    className: ownProps.className,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAllGames: () => dispatch(fetchAllGames())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(GameList)