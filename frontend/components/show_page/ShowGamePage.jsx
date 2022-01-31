import React from 'react';
import AboutSection from './AboutSection';
import GameDisplay from './GameDisplay';
import AddToCartDisplay from './AddToCartDisplay';

class ShowGame extends React.Component {

  componentDidMount() {
    
    this.props.fetchGame(this.props.gameId)
  }

  render() {
    const { game, createCartItem, currentUser } = this.props;

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
          <AddToCartDisplay
            game={game}
            createCartItem={createCartItem}
            currentUser={currentUser}
          />
          <AboutSection 
            game={game}  
          />
        </div>
      </div>
    )
  }
}

export default ShowGame;