import { connect } from 'react-redux';
import { updateReview } from '../../actions/review_actions'
import ReviewForm from './ReviewForm';
import { openModal } from '../../actions/modal_actions';

const mapStateToProps = (state, ownProps) => {
  console.log(state.reviewErrors)
  return {
    currentUser: ownProps.currentUser,
    title: ownProps.game.title,
    type: 'edit review',
    review: ownProps.review,
    changeToSummary: ownProps.changeToSummary,
    errors: state.reviewErrors
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    action: (review) => dispatch(updateReview(review)),
    openModal: (modal) => dispatch(openModal(modal))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ReviewForm);