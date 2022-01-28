import React from 'react';

class GameListItem extends React.Component {

  render() {
    const {game, className, gap} = this.props;

    console.log(gap)
    return (
      <li 
        className={className}
        onMouseEnter={this.props.onMouseEnter}
        >
        <img className='header-img' src={game.headerUrl} alt={`${game.title}'s feature image`}/>
        <div className='list-info-container'>
          <h3 className='game-title'>{game.title}</h3>
          <p className='windows'><i class="fab fa-windows"></i></p>
          <p className='game-genre'>{`${game.genre_1}, ${game.genre_2}`}</p>
          <p className="price-tag">{`$${game.price}`}</p>
        </div>
        {gap && <div className='gap'></div>}
      </li>
    )
  }
}

export default GameListItem;