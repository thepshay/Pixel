import React from 'react';

class InfoDisplay extends React.Component {

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
    const {game, className} = this.props;

    return (
      <div className={className}>
        <h3 className='info-title'>{game.title}</h3>
        <ul className='genre-list'>
          <li className='genre'>{this.changeToTitle(game.genre_1)}</li>
          <li className='genre'>{this.changeToTitle(game.genre_2)}</li>
        </ul>
        {game.photoUrls.slice(0, 4).map((screenshot, index) => {
          return (
            <img
              className='display-screenshot' 
              src={screenshot} 
              key={game.id+index} 
            />
          )
        })}
      </div>
    )
  }
}

export default InfoDisplay;