import React from 'react';
import AboutSection from './AboutSection';
import GameDisplay from './GameDisplay';
import AddToCartDisplay from './AddToCartDisplay';
import CartTabContainer from '../cart_items/CartTabContainer';

class ShowGame extends React.Component {

  componentDidMount() {
    window.scrollTo(0,0);
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
          <div className="header-container">
            <h1 className="title">{game.title}</h1>
            <CartTabContainer />
          </div>
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