import React from "react";
import { Link } from "react-router-dom";

import CarouselGameItem from './CarouselGameItem'

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currPos: 0,
    }

    // Temporary disabled, need to reset interval when user clicks next/back 
    // Clear interval? 

    // setInterval(()=>{
    //   let newPos;
    //   if (this.state.currPos === this.props.displayGameId.length-1) {
    //     newPos = 0
    //   } else {
    //     newPos = this.state.currPos + 1
    //   }
    //   this.setState({currPos: newPos})
    // }, 7000)
  }

  componentDidMount() {
    const notFilled = this.props.games.some((ele) => !ele)
    if (notFilled) {
      this.props.fetchAllGames();
    }
  }

  nextSlide(e) {
    e.preventDefault();
    let newPos;
    if (this.state.currPos === this.props.displayGameId.length-1) {
      newPos = 0
    } else {
      newPos = this.state.currPos + 1
    }
    this.setState({currPos: newPos})
  }

  prevSlide(e) {
    e.preventDefault();
    let newPos;
    if (this.state.currPos === 0) {
      newPos = this.props.displayGameId.length-1;
    } else {
      newPos = this.state.currPos - 1
    }
    this.setState({currPos: newPos})
  }

  updatePos(e, pos) {
    this.setState({currPos: pos})
  }

  render() {
    const {games, className, itemClassName, title, source} = this.props
    
    
    const notFilled = games.some((ele) => !ele)
    if (!games || notFilled) {
      return null
    }

    return (
      <div className={className}>
      
        <h1 className="title">{title}</h1>
        <button className="arrow left-btn" onClick={(e) => this.prevSlide(e)}>{'<'}</button>
        <button className="arrow right-btn" onClick={(e) => this.nextSlide(e)}>{'>'}</button>

        {games.map((game, index) => {
          return (
            <div key={game.id} className={index === this.state.currPos ? `${itemClassName} active` : `${itemClassName}`}>
                <Link to={source === 'home' ? `game/${game.id}` : `../game/${game.id}`}>
                  <CarouselGameItem key={game.id} game={game}/>
                </Link>
            </div> 
          )
        })}

        <div className="carousel-tab" >
          {[ ...Array(games.length).keys()].map( (ele, ind) => {
            return (
            <div 
              key={ind}
              className={ind === this.state.currPos ? 'tab active' : 'tab'}
              onClick={(e) => this.updatePos(e, ele)}>
            </div>
            )
          })}
        </div>
      </div>
    )
      
  }
}

export default Carousel