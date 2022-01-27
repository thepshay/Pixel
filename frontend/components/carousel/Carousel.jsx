import React from "react";

import CarouselGameItem from './CarouselGameItem'

const tempCarouselColor = ['#F7FF33', '#FF6633', '#33DDFF', '#5E33FF', '#33FF4A', '#143D18', '#A3B0DA']

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

  nextSlide() {
    let newPos;
    if (this.state.currPos === this.props.games.length-1) {
      newPos = 0
    } else {
      newPos = this.state.currPos + 1
    }
    this.setState({currPos: newPos})
  }

  prevSlide() {
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
      <div className="page-carousel-content">
        <div className="carousel-container">
        
          <button className="left-arrow" onClick={() => this.prevSlide()}>{'<'}</button>
          <button className="right-arrow" onClick={() => this.nextSlide()}>{'>'}</button>

          {games.map((game, index) => {
            return (
              <div key={index} className={index === this.state.currPos ? 'carousel-item active' : 'carousel-item'}>
                {(index===this.state.currPos) && 
                  (<CarouselGameItem 
                    color={tempCarouselColor[index]} 
                    game={game}
                  />)}
                
              </div> 
            )
          })}

        </div>
      </div>
    )
      
  }
}

export default Carousel