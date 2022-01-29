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
      <div className='show-page'>
        <div className='show-main-content'>
          <h1 className='game-title'>{game.title}</h1>
          <GameDisplay 
            game={game}
          />
        </div>
      </div>
    )
  }
}

export default ShowGame;