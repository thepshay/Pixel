import React from 'react';

class InfoDisplay extends React.Component {

  render() {
    const {game} = this.props;

    return (
      <div>
        <div>{game.title}</div>
        <ul>
          <li>{game.genre_1}</li>
          <li>{game.genre_2}</li>
        </ul>
        <ul>
          {game.photoUrls.slice(0, 4).map((screenshot, index) => {
            return (
              <img
                className='display-screenshot' 
                src={screenshot} 
                key={game.id+index} 
              />
            )
          })}
        </ul>
      </div>
    )
  }
}

export default InfoDisplay;