import { connect } from "react-redux";
import { createReview } from "../../actions/review_actions";
import ReviewForm from "./ReviewForm";
import { openModal } from '../../actions/modal_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    currentUser: ownProps.currentUser,
    title: ownProps.game.title,
    type: 'add review',
    review: {
      user_id: ownProps.currentUser.id,
      game_id: ownProps.game.id,
      recommend: null,
      body: ''
    },
    errors: state.reviewErrors
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    action: (review) => dispatch(createReview(review)),
    openModal: (modal) => dispatch(openModal(modal))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ReviewForm);