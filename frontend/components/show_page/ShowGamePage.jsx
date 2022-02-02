import React from 'react';
import AboutSection from './AboutSection';
import GameDisplay from './GameDisplay';
import AddToCartDisplay from './AddToCartDisplay';
import CartTab from '../cart_items/CartTab';
import { Link } from "react-router-dom";

class ShowGame extends React.Component {

  componentDidMount() {
    window.scrollTo(0,0);
    this.props.fetchGame(this.props.gameId);

    if (Object.keys(this.props.cart).length===0 && this.props.currentUser) {
      this.props.fetchAllCartItems();
    } 
  }


  render() {
    const { game, createCartItem, currentUser, cart, library } = this.props;
    if (!game) {return null;}

    const alreadyPurchased = Boolean(cart[game.id])

    let inCart = true;
    if (currentUser && library[game.id]) {
      inCart=false;
    }

    const action = currentUser ? (
      () => {
        if (alreadyPurchased) {
          this.props.history.push('/cart');
        } else {
          createCartItem({user_id: currentUser.id, game_id: game.id});
          this.props.history.push('/cart');
        }
      }
    ) : (
      () => this.props.history.push('/login')
    )

    return (
      <div className='show-page'>
        <div className='show-main-content'>
          <div className="header-container">
            <h1 className="title">{game.title}</h1>
            {currentUser && 
              <Link to='/cart'>
                <CartTab numItems={Object.keys(cart).length}/>
              </Link>
            }
          </div>
          <GameDisplay 
            game={game}
          />
          {inCart && <AddToCartDisplay
            game={game}
            action={action}
            alreadyPurchased={alreadyPurchased}
          />}
          <AboutSection 
            game={game}  
          />
        </div>
      </div>
    )
  }
}

export default ShowGame;