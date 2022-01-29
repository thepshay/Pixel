import React from 'react';

class ShowGame extends React.Component {

  render() {

    const { game } = this.props;

    return (
      <div>
        {game.title}
      </div>
    )
  }
}

export default ShowGame;