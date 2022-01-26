import { connect } from 'react-redux';
import fetchAllGames from '../../actions/game_actions'
import Carousel from './Carousel';

const FEATURE_ID = [1,2,3,4,5,6,7]

const mapStateToProps = (state) => {
  return {
    games: state.entities.games,
    featuredGameId: FEATURE_ID
  }
}

const mapDispatchToProps = (dispatch) => {
  return ({
    fetchAllGames: () => dispatch(fetchAllGames())
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(Carousel)