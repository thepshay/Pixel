import React from "react";

class CarouselGameItem extends React.Component {

  render() {
    return (
      <div className="carousel-color-item" style={{backgroundColor: this.props.color}}></div>
    )
  }
}

export default CarouselGameItem;