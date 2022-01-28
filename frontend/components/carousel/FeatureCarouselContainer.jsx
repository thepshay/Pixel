import { connect } from 'react-redux';
import {fetchAllGames} from '../../actions/game_actions'
import Carousel from './Carousel';



const mapStateToProps = (state, ownProps) => {
  return {
    games: state.entities.games,
    className: ownProps.className,
    itemClassName: ownProps.itemClassName,
    title: ownProps.title,
    displayGameId: ownProps.displayGameId
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAllGames: () => dispatch(fetchAllGames())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Carousel)