import React from 'react';
import AboutSection from './AboutSection';
import GameDisplay from './GameDisplay';
import AddToCartDisplay from './AddToCartDisplay';
import CartTab from '../cart_items/CartTab';

import ReviewSection from '../review/ReviewSection';

import { Link } from "react-router-dom";

class ShowGame extends React.Component {

  componentDidMount() {
    window.scrollTo(0,0);
    this.props.fetchGame(this.props.gameId);
    this.props.fetchAllReviews(this.props.gameId)

    if (Object.keys(this.props.cart).length===0 && this.props.currentUser) {
      this.props.fetchAllCartItems();
    } 
  }

  addToCart(inCart) {
    const { createCartItem, game} = this.props;

    return () => {
      if (inCart) {
        this.props.history.push('/cart');
      } else {
        createCartItem({user_id: currentUser.id, game_id: game.id});
        this.props.history.push('/cart');
      }
    }
  }

  goToLogin() {
    return () => this.props.history.push('/login')
  }


  render() {
    const { game, currentUser, cart, library, reviews } = this.props;
    if (!game) {return null;}

    const inCart = Boolean(cart[game.id])
    const inLibrary = Boolean((currentUser && library[game.id]))
    const hasReview = Boolean((currentUser && reviews[currentUser.id]))

    let userActionDisplay;
    if (!currentUser) {
      console.log(1)
      userActionDisplay = () => (
        <AddToCartDisplay
          game={game}
          action={this.goToLogin()}
          inCart={false}
        />
      )
    } else if (currentUser && !inLibrary) {
      console.log(2)
      userActionDisplay = () => (
        <AddToCartDisplay
          game={game}
          action={this.addToCart(inCart)}
          inCart={inCart}
        />
      ) 
    } else if (currentUser && inLibrary && !hasReview) {
      console.log(3)
      userActionDisplay = () => (
        <div>Add a review</div>
      )
    } else if (currentUser && inLibrary && hasReview) {
      console.log(4)
      userActionDisplay = () => (
        <div>Edit Review</div>
      )
    } else {
      console.log(5)
      console.log('Current User: ', currentUser);
      console.log('inLibrary: ', inLibrary);
      console.log('hasReview: ', hasReview);
      userActionDisplay = () => (
        <div>Something went wrong</div>
      )
    }

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
          {userActionDisplay()}
          <AboutSection 
            game={game}  
          />
          <ReviewSection
            reviews={reviews}
          />
        </div>
      </div>
    )
  }
}

export default ShowGame;