import React from 'react';
import ReviewFormHeader from './ReviewFormHeader';
import { formateDate } from '../../util/utilities';

class ReviewSummary extends React.Component {
  handleDeleteReview(e) {
    e.preventDefault();
    this.props.deleteReview(this.props.review.id, this.props.game.id)
  }

  openH

  render() {
    const {game, review, currentUser} = this.props;

    return (
      <div className='review-summary-container'>
        <ReviewFormHeader title={game.title} />
        <div className='review-summary-content'>
          <h3 className='review-summary-title'>{`You reviewed this game on ${formateDate(review.date)}`}</h3>
          <div className='review-summary'>
            <img
              className="review-summary-thumb" 
              src={review.recommend ? window.thumbsUp : window.thumbsDown} 
            />
            <p className='review-summary-body'>
              {review.body}
            </p>
          </div>
          <div className='review-summary-button-container'>
            <button className='delete-review' onClick={(e) => this.handleDeleteReview(e)}>
              Delete Review
            </button>
            <button className='edit-review' onClick={() => this.props.changeToEdit()}>
              EditReview
            </button>
          </div>
        </div>
      </div>
    )
  }

}

export default ReviewSummary;