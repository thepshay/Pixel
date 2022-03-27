import React from "react";
import ReviewFormHeader from "./ReviewFormHeader";

class ReviewForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ...props.review,
      errors: ''
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.action(this.state)
      .then(() => {
        if (this.props.type === 'edit review') {
          this.props.changeToSummary();
        }
      })
      .fail(() => {
        this.props.openModal({type: 'reviewError', title: this.props.game.title});
      });
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
      reviewTitle: `Write a review for ${title}`,
      button: 'Post Review'
    } : {
      reviewTitle: `Edit review for ${title}`,
      button: 'Edit Review'
    }

    return (
      <div className="review-form-container">
        <ReviewFormHeader title={title} />
        <div className="review-body">
          <div className="review-intro">
            <h3 className="review-title">{reviewOptions.reviewTitle}</h3>
            <div className="review-info">
              <p>Please describe what you liked or disliked about this game and whether you recommend it to others.</p>
              <p>Please remember to be polite and follow the Rules and Guidelines</p>
            </div>
          </div>
          <form className="review-form" onSubmit={(e) => this.handleSubmit(e)}>
            <img className='current-pfp' src={currentUser.photoUrl} alt='profile picture'/>
            <div className="review-inputs">
              <textarea className="review-body" onChange={this.updateBody()} value={this.state.body}/>
              <div className="review-bottom">
                <div className='recommend'>
                  <h3 className="recommend-title">Do you recommend this game?</h3>
                  <div className="recommend-buttons">
                    <button onClick={(e) => this.handleRecommend(e, true)} className={this.state.recommend === true ? 'rec-yes active' : 'rec-yes'}>
                      <i className="fas fa-thumbs-up"></i>
                      <i className="fas fa-check"></i>
                      Yes
                    </button>
                    <button onClick={(e) => this.handleRecommend(e, false)} className={this.state.recommend === false ? 'rec-no active' : 'rec-no'}>
                      <i className="fas fa-thumbs-down"></i>
                      <i className="fas fa-check"></i>                        
                      No
                    </button>
                  </div>
                </div>
                <button className="submit-review" type='submit'>{reviewOptions.button}</button>
              </div>
            </div>
          </form>

        </div>


      </div>
    )
  }
}

export default ReviewForm;