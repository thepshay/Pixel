import React from "react";

class CarouselGameItem extends React.Component {

  render() {

    const {game} = this.props;

    return (
      <div className="item-display">
        
        <img className='main-image' src={game.featureUrl} alt={`${game.title}'s feature image` }/>
        <div  className='info-container'>
          <h1 className="title">{game.title}</h1>

          <div className="screenshot-container">
            {game.photoUrls.slice(0, 4).map((screenshotUrl, index) => {
              return <img key={index} src={screenshotUrl} />
            })}
          </div>
          <div className="description">
            <h2 className='description-title'>Now Available</h2>
            <div className="all-top-sellers">
              <p>Top Seller</p>
            </div>
          </div>

          <div className="price-tag">{`$${game.price}`}</div>
        </div> 
      </div>
    )
  }

}

export default CarouselGameItem;