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
    fetchAllLibraryItems: () => dispatch(fetchAllLibraryItems())
  }
}

export default connect(mapStateToProps, mapDispatchToPorps)(LibraryPage)