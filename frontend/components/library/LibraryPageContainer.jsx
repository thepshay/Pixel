import { connect } from 'react-redux';
import { fetchAllLibraryItems } from '../../actions/library_item_actions';
import LibraryPage from './LibraryPage'

const mapStateToProps = (state) => {
  return {
    library: state.entities.library
  }
}

const mapDispatchToPorps = (dispatch) => {
  return {
    fetchAllLibraryItems: (userId) => dispatch(fetchAllLibraryItems(userId))
  }
}

export default connect(mapStateToProps, mapDispatchToPorps)(LibraryPage)