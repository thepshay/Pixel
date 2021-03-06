import { connect } from "react-redux";
import { deleteReview } from '../../actions/review_actions';
import ReviewSummary from "./ReviewSummary";

const mapStateToProps = (state, ownProps) => {
  return {
    game: ownProps.game,
    review: ownProps.review,
    currentUser: ownProps.currentUser,
    changeToEdit: ownProps.changeToEdit
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    deleteReview: (reviewId, gameId) => dispatch(deleteReview(reviewId, gameId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ReviewSummary)