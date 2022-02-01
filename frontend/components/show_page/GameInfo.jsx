import React from "react";
import { changeToTitle } from '../../util/utilities';

class GameInfo extends React.Component {

  render() {
    const {game} = this.props;

    return (
      <div className="game-info-container">
        <img className="header-img" src={game.headerUrl}/>
        <p className="short-about">{game.short_about}</p>
        <div className="genre-container">
          <h5>Popular user-defined tags for this product:</h5>
          <ul className='genre-list'>
            <li className='genre'>{changeToTitle(game.genre_1)}</li>
            <li className='genre'>{changeToTitle(game.genre_2)}</li>
          </ul>
        </div>
      </div>
    )
  }
}

export default GameInfo;