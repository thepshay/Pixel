import React from 'react';
import GameInfo from './GameInfo';

class GameDisplay extends React.Component {

  render() {
    const {game} = this.props;

    return (
      <div className='game-display'>
        
        <div className='img-container'>
          <img className='main-img' src={game.photoUrls[0]}/>
          <ul className='screenshot-list'>
            {game.photoUrls.map((url, index) => {
              return (
                <li key={index}>
                  <img 
                    className="screenshot-img"
                    src={url}
                  />
                </li>
              )
            })}
          </ul>
        </div>
        {/* <GameInfo 
          game={game}
        /> */}
      </div>
    )
  }
}

export default GameDisplay;