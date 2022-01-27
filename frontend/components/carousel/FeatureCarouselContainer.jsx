import { connect } from 'react-redux';
import {fetchAllGames} from '../../actions/game_actions'
import Carousel from './Carousel';

const FEATURE_ID = [1,4,13,7,9,17,6];

const mapStateToProps = (state, ownProps) => {
  const featuredGames = FEATURE_ID.map(id =>{
    return state.entities.games[id];
  });

  return {
    games: featuredGames,
    className: ownProps.className,
    itemClassName: ownProps.itemClassName,
    title: ownProps.title
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAllGames: () => dispatch(fetchAllGames())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Carousel)