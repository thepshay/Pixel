import React from "react";

import CarouselGameItem from './CarouselGameItem'

const tempCarouselColor = ['', '', '', '', '']

class Carousel extends React.Component {

  render() {
    return (
      <div className="carousel-container">
        <div className="carousel-item">
          {tempCarouselColor.map((color, index) => <CarouselGameItem key={index} color={color} />)}
        </div>
        <div class="carousel-actions">
          <button id='carousel-prev-btn'><i class="fa-solid fa-angle-left"></i></button>
          <button id='carousel-next-btn'><i class="fa-solid fa-angle-right"></i></button>
        </div>
      </div>
    )
      
  }
}

export default Carousel