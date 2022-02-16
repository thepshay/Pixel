import { connect } from 'react-redux';
import { closeModal } from '../../actions/modal_actions';
import ErrorModal from './ErrorModal';

const mapStateToProps = (state, ownProps) => {
  return {
    title: ownProps.title
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    closeModal: () => dispatch(closeModal())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ErrorModal);