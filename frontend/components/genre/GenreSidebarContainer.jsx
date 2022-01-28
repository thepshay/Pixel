import { connect } from 'react-redux'
import { fetchAllGames } from '../../actions/game_actions'
import GenreSidebar from './GenreSidebar'

const mapStateToProps = (state, ownProps) => {
  return {
    genres: Object.keys(state.entities.genre)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAllGames: () => dispatch(fetchAllGames())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(GenreSidebar)