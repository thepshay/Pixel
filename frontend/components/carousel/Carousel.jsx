import React from "react";

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
    this.props.fetchAllGames();
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
    const {games, className, itemClassName, title, displayGameId} = this.props
    
    if (!games[0]) {
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
                <CarouselGameItem key={game.id} game={game}/>
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