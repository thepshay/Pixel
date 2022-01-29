import React from "react";
import CarouselContainer from '../carousel/CarouselContainer';
import GameListContainer from '../game_list/GameListContainer';

class GenrePage extends React.Component {

  componentDidMount() {
    if (!this.props.genreId) {
      this.props.fetchAllGames()
    }
  }

  render() {
    const { genre, genreGameId, games } = this.props;
    
    if (!genreGameId) {
      return null;
    }
    
    const moreThanFourGames = (
      <div className="genre-main-content">
        <CarouselContainer 
          title={genre}
          className={'carousel genre-carousel'}
          itemClassName={'carousel-item'}
          displayGameId={genreGameId.slice(0, 4)}
          source={'genre'}
        />
        <GameListContainer 
          className={'game-list home-game-list'}
          displayGameId={ genreGameId.slice(4) }
          infoBox={false}
          source={'genre'}
        />
      </div>
    )

    const fourOrLess = (
      <div className="genre-main-content">
        <CarouselContainer 
          title={genre}
          className={'carousel genre-carousel'}
          itemClassName={'carousel-item'}
          displayGameId={genreGameId}
          source={'genre'}
        />
      </div>
    )

    return (
      <div className="genre-page">
        {genreGameId.length > 4 ? moreThanFourGames : fourOrLess}
      </div>
    )
  }
}

export default GenrePage;