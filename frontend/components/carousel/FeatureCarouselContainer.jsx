import { connect } from 'react-redux';
import {fetchAllGames} from '../../actions/game_actions'
import Carousel from './Carousel';

const FEATURE_ID = [1,4,13,7,9,17,6]

const mapStateToProps = (state) => {

  const featuredGames = FEATURE_ID.map(id =>{
    return state.entities.games[id]
  })

  return {
    games: featuredGames
  }
}

const mapDispatchToProps = (dispatch) => {
  return ({
    fetchAllGames: () => dispatch(fetchAllGames())
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(Carousel)