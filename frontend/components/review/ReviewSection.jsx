import React from "react";
import ReviewItem from "./ReviewItem";

class ReviewSection extends React.Component {

  render() {

    const { reviews } = this.props;

    return (
      <div className="reviews-container">
        <h3 className="review-title">CUSTOMER REVIEWS</h3>

        <ul className="review-list">
          {Object.values(reviews).map((review, index) => {
            return (
              <ReviewItem
                key={index}
                review={review}
              />
            )
          })}
        </ul>
      </div>
    )
  }
}

export default ReviewSection;