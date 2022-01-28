import React from 'react';

class InfoDisplay extends React.Component {

  render() {
    const {game, className} = this.props;

    return (
      <div className={className}>
        <h3 className='info-title'>{game.title}</h3>
        <ul className='genre-list'>
          <li className='genre'>{game.genre_1}</li>
          <li className='genre'>{game.genre_2}</li>
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