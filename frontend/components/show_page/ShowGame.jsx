import React from 'react';
import GameDisplay from './GameDisplay';

class ShowGame extends React.Component {

  componentDidMount() {
    this.props.fetchGame(this.props.gameId)
  }

  render() {
    const { game } = this.props;

    if (!game) {
      return null;
    }


    return (
      <div>
        <h1>{game.title}</h1>
        <GameDisplay 
          game={game}
        />
      </div>
    )
  }
}

export default ShowGame;