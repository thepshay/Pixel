import React from "react";

import CarouselGameItem from './CarouselGameItem'

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currPos: 0
    }
  }

  componentDidMount() {
    this.props.fetchAllGames();
  }

  nextSlide(e) {
    e.preventDefault();
    let newPos;
    if (this.state.currPos === this.props.games.length-1) {
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
      newPos = this.props.games.length-1;
    } else {
      newPos = this.state.currPos - 1
    }
    this.setState({currPos: newPos})

  }

  render() {
    const {games} = this.props

    if (!games[0]) {
      return null
    }

    console.log(games)
    return (
      <div className="carousel">
      
        <button className="arrow left-btn" onClick={(e) => this.prevSlide(e)}>{'<'}</button>
        <button className="arrow right-btn" onClick={(e) => this.nextSlide(e)}>{'>'}</button>

        {games.map((game, index) => {
          return (
            <div key={game.id} className={index === this.state.currPos ? 'carousel-item active' : 'carousel-item'}>
                <CarouselGameItem key={game.id}game={game}/>
            </div> 
          )
        })}
      </div>
    )
      
  }
}

export default Carousel