import React from 'react';
import FeatureCarouselContainer from '../carousel/FeatureCarouselContainer';
import GameList from '../game_list/GameList';
import GameListContainer from '../game_list/GameListContainer';

class HomePage extends React.Component {

  render() {
    return (
      <div className='home-page-container'>
        <FeatureCarouselContainer 
          title={'FEATURE & RECOMMENDED'}
          className={'carousel home-carousel'}
          itemClassName={'home-carousel-item'}
          displayGameId={[1,4,13,7,9,17,6]}
        />
        <GameListContainer 
          className={'game-list home-game-list'}
          displayGameId={ [2,3,5,8,10,11,12,14,15,16] }
        />
      </div>
    )
  }
}

export default HomePage;