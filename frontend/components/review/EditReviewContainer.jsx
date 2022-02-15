import { connect } from 'react-redux';
import { updateReview } from '../../actions/review_actions'
import ReviewForm from './ReviewForm';

const mapStateToProps = (state, ownProps) => {
  return {
    currentUser: ownProps.currentUser,
    title: ownProps.game.title,
    type: 'edit review',
    review: ownProps.review,
    changeToSummary: ownProps.changeToSummary
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    action: (review) => dispatch(updateReview(review))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ReviewForm);