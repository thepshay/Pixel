import { connect } from 'react-redux';
import {fetchAllGames} from '../../actions/game_actions'
import Carousel from './Carousel';



const mapStateToProps = (state, ownProps) => {
  const featuredGames = ownProps.displayGameId.map(id =>{
    return state.entities.games[id]
  })

  return {
    games: featuredGames,
    className: ownProps.className,
    itemClassName: ownProps.itemClassName,
    title: ownProps.title,
    source: ownProps.source
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAllGames: () => dispatch(fetchAllGames())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Carousel)