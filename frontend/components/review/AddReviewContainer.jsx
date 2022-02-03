import { connect } from "react-redux";
import { createReview } from "../../actions/review_actions";
import ReviewForm from "./ReviewForm";

const mapStateToProps = (state, ownProps) => {
  return {
    currentUser: ownProps.currentUser,
    title: `Write a review for ${ownProps.game.title}`,
    review: {
      user_id: ownProps.currentUser.id,
      game: ownProps.game.id,
      recommend: null,
      body: ''
    }
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    action: (review) => dispatch(createReview(review))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ReviewForm);