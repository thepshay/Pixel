import React from "react";

class ReviewItem extends React.Component {

  render() {
    const { review } = this.props;
    return (
      <div className="review-content">
        <div className="user-info">
          <img className='profile-pic' src={review.profile_pic} />
          <div className="username">{review.username}</div>
        </div>
        <div className="review-info">
          <div className="review-header">
            <img
              className="thumb" 
              src={review.recommend ? window.thumbsUp : window.thumbsDown} 
            />
            <div className="recommend">
              {review.recommend ? 'Recommended' : 'Not Recommended'}
            </div> 
          </div>
          <div className="review-body">
            <p className="review">
              {review.body}
            </p>
          </div>
        </div>
      </div>
    )
  }
}

export default ReviewItem;