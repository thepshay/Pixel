import { connect } from 'react-redux';
import { fetchAllLibraryItems } from '../../actions/library_item_actions';
import LibraryPage from './LibraryPage'
import { fetchUser } from '../../actions/user_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    userId: ownProps.match.params.userId,
    library: state.entities.library,
    user: state.entities.users[ownProps.match.params.userId]
  }
}

const mapDispatchToPorps = (dispatch) => {
  return {
    fetchAllLibraryItems: (userId) => dispatch(fetchAllLibraryItems(userId)),
    fetchUser: (userId) => dispatch(fetchUser(userId))
  }
}

export default connect(mapStateToProps, mapDispatchToPorps)(LibraryPage)