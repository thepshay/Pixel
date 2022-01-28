import React from 'react';

class GameListItem extends React.Component {

  render() {
    const {game} = this.props;

    return (
      <li className='game-list-item'>
        <img className='header-img' src={game.headerUrl} alt={`${game.title}'s feature image`}/>
        <div className='list-info-container'>
          <h3 className='game-title'>{game.title}</h3>
          <p className='game-genre'>{`${game.genre_1}, ${game.genre_2}`}</p>
          <p className="price-tag">{`$${game.price}`}</p>
        </div>
      </li>
    )
  }
}

export default GameListItem;