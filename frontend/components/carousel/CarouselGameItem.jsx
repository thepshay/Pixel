import React from "react";

class CarouselGameItem extends React.Component {

  render() {
    const {game, color} = this.props;
    return (
      <div style={{backgroundColor: color}}>{game.title}</div>
    )
  }


  // render() {
  //   const {className, color} = this.props;
  //   return (
  //     <div className={className} style={{backgroundColor: color}}>{color}</div>
  //   )
  // }
}

export default CarouselGameItem;