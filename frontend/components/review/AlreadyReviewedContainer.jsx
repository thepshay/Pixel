import React from 'react';
import ReviewFormHeader from './ReviewFormHeader';

class AlreadyReviewedContainer extends React.Component {

  render() {
    const {game, } = this.props;

    return (
      <div>
        <ReviewFormHeader title={game.title} />
      </div>
    )
  }

}

export default AlreadyReviewedContainer;