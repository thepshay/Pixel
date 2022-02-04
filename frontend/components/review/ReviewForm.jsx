import React from "react";

class ReviewForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = props.review
  }

  render() {
    const { currentUser, type, title} = this.props;

    const reviewOptions = (type === 'add review') ? {
      reviewTitle: `Write a review for ${title}`
    } : {
      reviewTitle: `Edit review for ${title}`
    }

    

    return (
      <div className="review-form-container">
        <div className="review-header">
          <div className="in-library"> 
            <i class="fas fa-bars"></i> IN LIBRARY
          </div>
          <h3>{`${title} is already in your Pixel library`}</h3>
        </div>
        <div className="review-body">
          <div className="review-intro">
            <div className="review-header">{reviewOptions.reviewTitle}</div>
            <div className="review-info">
              <p>Please describe what you liked or disliked about this game and whether you recommend it to others.</p>
              <p>Please remember to be polite and follow the Rules and Guidelines</p>
            </div>
          </div>
          <form className="review-form">
            <img src={currentUser.photoUrl}/>
            <div className="review-inputs">
              <textarea className="review-body" onChange={this.updateBody} />
              <div className="review-bottom">
                <div className='recommend'>
                  <div className="recommend-title">Do you recommend this game?</div>
                  <div className="recommend-buttons">
                    {this.state.recommend ? (
                      <div className="recommend-buttons">
                        <button className="rec-yes active">Yes</button>
                        <button className="rec-yes">No</button>
                      </div>
                    ) : (
                      <div className="recommend-buttons">
                        <button className="rec-yes">Yes</button>
                        <button className="rec-yes active">No</button>
                      </div>
                    )}
                </div>
              </div>
            </div>
          </form>

        </div>


      </div>
    )
  }
}

export default ReviewForm;