import React from "react";

class CarouselGameItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      featureUrl: this.props.game.featureUrl
    }
    this.changeToSelectedImg = this.changeToSelectedImg.bind(this);
    this.changeBackToFeature = this.changeBackToFeature.bind(this);
  }

  changeToSelectedImg(e, url) {
    console.log('enter')
    this.setState({featureUrl: url});
  }

  changeBackToFeature() {
    console.log('leave')
    this.setState({featureUrl: this.props.game.featureUrl});
  }

  render() {
    const {game} = this.props;

    return (
      <div className="item-display">
        
        <img className='main-image' src={this.state.featureUrl} alt={`${game.title}'s feature image` }/>
        {console.log(this.state.featureUrl)}
        <div  className='info-container'>
          <h1 className="title">{game.title}</h1>

          <div className="screenshot-container">
            {game.photoUrls.slice(0, 4).map((screenshotUrl, index) => {
              return (
                <img className="screenshot-img"
                  key={game.id+index} 
                  src={screenshotUrl} 
                  onClick={()=> console.log('hello')}
                  onMouseEnter={(e) => this.changeToSelectedImg(e, screenshotUrl)}
                  onMouseLeave={() => this.changeBackToFeature()}
                />
              )
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