import React from 'react';
import AboutSection from './AboutSection';
import GameDisplay from './GameDisplay';
import AddToCartDisplay from './AddToCartDisplay';
import CartTab from '../cart_items/CartTab';
import AddReviewContainer from '../review/AddReviewContainer';
import ReviewSection from '../review/ReviewSection';

import { Link } from "react-router-dom";
import ReviewedSummaryContainer from '../review/ReviewSummaryContainer';
import EditReviewContainer from '../review/EditReviewContainer';

class ShowGame extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editForm: false
    }
  }

  componentDidMount() {
    window.scrollTo(0,0);
    this.props.fetchGame(this.props.gameId);
    this.props.fetchAllReviews(this.props.gameId)

    if (Object.keys(this.props.cart).length===0 && this.props.currentUser) {
      this.props.fetchAllCartItems();
    } 
    
    if (this.props.currentUser) {
      this.props.fetchAllLibraryItems(this.props.currentUser.id)
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

  changeToEdit() {
    this.setState({editForm: true})
  }

  changeToSummary() {
    this.setState({editForm: false})
  }


  render() {
    const { game, currentUser, cart, library, reviews } = this.props;
    if (!game) {return null;}

    const inCart = Boolean(cart[game.id])
    const inLibrary = Boolean((currentUser && library[game.id]))
    const hasReview = Boolean((currentUser && reviews[currentUser.id]))

    let userActionDisplay;
    if (!currentUser) { // if no user exists
      console.log(1)
      userActionDisplay = () => (
        <AddToCartDisplay
          game={game}
          action={this.goToLogin()}
          inCart={false}
        />
      )
    } else if (currentUser && !inLibrary) { // user exists, game not in library
      console.log(2)
      userActionDisplay = () => (
        <AddToCartDisplay
          game={game}
          action={this.addToCart(inCart)}
          inCart={inCart}
        />
      ) 
    } else if (currentUser && inLibrary && !hasReview) { // user exists, game in library, no review
      console.log(3)
      userActionDisplay = () => (
        <AddReviewContainer 
          game={game}
          currentUser={currentUser}
        />
      )
    } else if (currentUser && inLibrary && hasReview) { // user exists, game in library, review
      console.log(4)
      userActionDisplay = () => {
        if (this.state.editForm) {
          return (
            <EditReviewContainer 
              game={game}
              currentUser={currentUser}
              review={reviews[currentUser.id]}
              changeToSummary={() => this.changeToSummary()}
            />
          )
        } else {
          return (
            <ReviewedSummaryContainer
              game={game}
              review={reviews[currentUser.id]}
              currentUser={currentUser}
              changeToEdit={() => this.changeToEdit()}
            />
          )
        }
      }
    } else { // shouldn't be possible, but spaghetti will allow it
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