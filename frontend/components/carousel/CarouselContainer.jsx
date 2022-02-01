import { connect } from 'react-redux';
import {fetchAllGames} from '../../actions/game_actions'
import Carousel from './Carousel';
import { fetchAllCartItems } from '../../actions/cart_item_actions';


const mapStateToProps = (state, ownProps) => {
  const featuredGames = ownProps.displayGameId.map(id =>{
    return state.entities.games[id]
  })

  return {
    currentUser: state.session.currentUser,
    games: featuredGames,
    className: ownProps.className,
    itemClassName: ownProps.itemClassName,
    title: ownProps.title,
    source: ownProps.source,
    cart: state.entities.cart
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAllGames: () => dispatch(fetchAllGames()),
    fetchAllCartItems: () => dispatch(fetchAllCartItems())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Carousel)