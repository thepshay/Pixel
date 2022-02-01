import React from 'react';
import { changeToTitle } from '../../util/utilities';

class GameListItem extends React.Component {

  render() {
    const {game, className, gap} = this.props;

    return (
      <li 
        className={className}
        onMouseEnter={this.props.onMouseEnter}
      >
        <img className='header-img' src={game.headerUrl} alt={`${game.title}'s feature image`}/>
        <div className='list-info-container'>
          <h3 className='game-title'>{game.title}</h3>
          <p className='windows'><i className="fab fa-windows"></i></p>
          <p className='game-genre'>{`${changeToTitle(game.genre_1)}, ${changeToTitle(game.genre_2)}`}</p>
          <p className="price-tag">{`$${game.price}`}</p>
        </div>
        {gap && <div className='gap'></div>}
      </li>
    )
  }
}

export default GameListItem;