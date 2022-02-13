import React from "react";

class ReviewForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = props.review
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.action(this.state);
  }

  handleRecommend(e, data) {
    e.preventDefault();
    this.setState({recommend: data})
  }

  updateBody() {
    return (e) => this.setState({body: e.currentTarget.value})
  }

  render() {
    const { currentUser, type, title} = this.props;

    const reviewOptions = (type === 'add review') ? {
      reviewTitle: `Write a review for ${title}`
    } : {
      reviewTitle: `Edit review for ${title}`
    }

    console.log(this.state)

    return (
      <div className="review-form-container">
        <div className="review-header">
          <div className="in-library"> 
            <i className="fas fa-bars"></i> IN LIBRARY
          </div>
          <h3>{`${title} is already in your Pixel library`}</h3>
        </div>
        <div className="review-body">
          <div className="review-intro">
            <div className="review-title">{reviewOptions.reviewTitle}</div>
            <div className="review-info">
              <p>Please describe what you liked or disliked about this game and whether you recommend it to others.</p>
              <p>Please remember to be polite and follow the Rules and Guidelines</p>
            </div>
          </div>
          <form className="review-form" onSubmit={(e) => this.handleSubmit(e)}>
            <img src={currentUser.photoUrl}/>
            <div className="review-inputs">
              <textarea className="review-body" onChange={this.updateBody()} />
              <div className="review-bottom">
                <div className='recommend'>
                  <div className="recommend-title">Do you recommend this game?</div>
                  <div className="recommend-buttons">
                    <div className="recommend-buttons">
                      <button onClick={(e) => this.handleRecommend(e, true)} className={this.state.recommend === true ? 'rec-yes active' : 'rec-yes'}>Yes</button>
                      <button onClick={(e) => this.handleRecommend(e, false)} className={this.state.recommend === false ? 'rec-no active' : 'rec-no'}>No</button>
                    </div>
                  </div>
                </div>
                <button type='submit'>Post Review</button>
              </div>
            </div>
          </form>

        </div>


      </div>
    )
  }
}

export default ReviewForm;