import React from "react";

class CarouselGameItem extends React.Component {

  render() {
    const {game, color} = this.props;
    console.log(game)
    return (
      <div className="item-display">
        
        <img className='main-image' src={game.featureUrl}/>
        <div  className='info-container' style={{backgroundColor: color}}>

        </div> 
      </div>
    )
  }

}

export default CarouselGameItem;