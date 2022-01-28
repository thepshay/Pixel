import React from 'react';
import CarouselContainer from '../carousel/CarouselContainer';
import Footer from '../footer/Footer';
import GameListContainer from '../game_list/GameListContainer';
import GenreSidebarContainer from '../genre/GenreSidebarContainer';

class HomePage extends React.Component {

  render() {
    return (
      <div className='home-page-container'>

        <div className='main'>
          <GenreSidebarContainer />
          <CarouselContainer 
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
        <Footer />
      </div>
    )
  }
}

export default HomePage;