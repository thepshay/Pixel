import React from 'react';
import FeatureCarouselContainer from '../carousel/FeatureCarouselContainer';
import GameList from '../game_list/GameList';

class HomePage extends React.Component {

  render() {
    return (
      <div className='home-page-container'>
        <FeatureCarouselContainer 
          title={'FEATURE & RECOMMENDED'}
          className={'carousel home-carousel'}
          itemClassName={'home-carousel-item'}
        />
        <GameList 
          className={'game-list home-game-list'}
        />
      </div>
    )
  }
}

export default HomePage;