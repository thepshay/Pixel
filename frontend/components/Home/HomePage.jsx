import React from 'react';
import FeatureCarouselContainer from '../carousel/FeatureCarouselContainer';

class HomePage extends React.Component {

  render() {
    return (
      <div className='home-page-container'>
        <FeatureCarouselContainer 
          title={'FEATURE & RECOMMENDED'}
          className={'carousel home-carousel'}
          itemClassName={'home-carousel-item'}
        />
      </div>
    )
  }
}

export default HomePage;