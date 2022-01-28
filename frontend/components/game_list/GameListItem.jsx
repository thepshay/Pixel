import React from 'react';

class GameListItem extends React.Component {

  render() {
    const {game} = this.props;

    return (
      <li className='game-list-item'>
        <img src={game.headerUrl} alt={`${game.title}'s feature image`}/>
        <div className='list-info-container'>
          <h3 className='game-title'>{game.title}</h3>
          <div>{`${game.genre_1}, ${game.genre_2}`}</div>
          <div className="price-tag">{`$${game.price}`}</div>
        </div>
      </li>
    )
  }
}

export default GameListItem;