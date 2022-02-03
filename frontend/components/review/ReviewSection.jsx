import React from "react";
import ReviewItem from "./ReviewItem";

class ReviewSection extends React.Component {

  render() {

    const { reviews } = this.props;

    return (
      <div className="reviews-container">
        <div>CUSTOMER REVIEWS</div>

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