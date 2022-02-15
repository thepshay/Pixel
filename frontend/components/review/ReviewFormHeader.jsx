import React from 'react';

class ReviewFormHeader extends React.Component {

  render() {
    const { title } = this.props;
    return (
      <div className="review-header">
          <div className="in-library"> 
            <i className="fas fa-bars"></i> IN LIBRARY
          </div>
          <h2>{`${title} is already in your Pixel library`}</h2>
      </div>
    )
  }
}

export default ReviewFormHeader;