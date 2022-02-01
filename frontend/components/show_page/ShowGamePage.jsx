import React from 'react';
import AboutSection from './AboutSection';
import GameDisplay from './GameDisplay';
import AddToCartDisplay from './AddToCartDisplay';
import CartTab from '../cart_items/CartTab';

class ShowGame extends React.Component {

  componentDidMount() {
    window.scrollTo(0,0);
    this.props.fetchGame(this.props.gameId);
    this.props.fetchAllCartItems();
  }


  render() {
    const { game, createCartItem, currentUser, cart } = this.props;

    if (!game || !cart) {
      return null;
    }

    const action = currentUser ? (
      () => createCartItem({user_id: currentUser.id, game_id: game.id})
    ) : (
      () => this.props.history.push('/login')
    )

    return (
      <div className='show-page'>
        <div className='show-main-content'>
          <div className="header-container">
            <h1 className="title">{game.title}</h1>
            {currentUser && <CartTab numItems={Object.keys(cart).length}/>}
          </div>
          <GameDisplay 
            game={game}
          />
          <AddToCartDisplay
            game={game}
            action={action}
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