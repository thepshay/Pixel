import React from "react";

class ErrorModal extends React.Component {

  handleClick(e) {
    e.preventDefault();
    this.props.closeModal();
  }
  
  render() {
    const { title, closeModal } = this.props;


    return (
      <div className="review-error-container">
        <i className="fas fa-xmark" onClick={(e) => this.handleClick(e)}></i>
        <h1 className="review-error-title">Write a review for {title}</h1>
        <p>Please describe what you liked or 
          disliked about this game and whether you recommend it to others.</p>
        <p>Please remember to be polite and follow the Rules and Guidelines.</p>
        <div className="review-error-button-container">
          <button onClick={(e) => this.handleClick(e)}>OK</button>
        </div>
      </div>
    )
  }
}

export default ErrorModal;