import React from 'react';
import CarouselContainer from '../carousel/CarouselContainer';
import Footer from '../footer/Footer';
import GameListContainer from '../game_list/GameListContainer';
import GenreSidebarContainer from '../genre/GenreSidebarContainer';

class HomePage extends React.Component {

  componentDidMount() {
    window.scrollTo(0,0);
  }

  render() {
    return (
      <div className='home-page-container'>

        <div className='home-main-content'>
          <GenreSidebarContainer />
          <CarouselContainer 
            title={'FEATURE & RECOMMENDED'}
            className={'carousel home-carousel'}
            itemClassName={'carousel-item'}
            displayGameId={[1,4,13,7,9,17,6]}
            source={'home'}
          />
          <GameListContainer 
            className={'game-list home-game-list'}
            displayGameId={ [2,3,5,8,10,11,12,14,15,16] }
            infoBox={true}
            source={'home'}
          />
        </div>
      </div>
    )
  }
}

export default HomePage;