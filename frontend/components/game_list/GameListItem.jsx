import React from 'react';

class GameListItem extends React.Component {

  changeToTitle(str) {
    const words = str.split('-');
    return words.map(word => {
      return this.capitalize(word)
    }).join(' ');
  }

  capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

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
          <p className='game-genre'>{`${this.changeToTitle(game.genre_1)}, ${this.changeToTitle(game.genre_2)}`}</p>
          <p className="price-tag">{`$${game.price}`}</p>
        </div>
        {gap && <div className='gap'></div>}
      </li>
    )
  }
}

export default GameListItem;