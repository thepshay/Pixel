import React from "react";
import { Link } from 'react-router-dom'

class LibraryListItem extends React.Component {

  render() {
    const {game} = this.props;
    console.log(game)
    return (
      <li className='library-list-item'>
        <Link to={`/game/${game.game_id}`}>
          <img className='library-game-header' src={game.headerUrl} />
        </Link>
        <div className="library-game-details">
          <Link to={`/game/${game.game_id}`}>
            <h3 className="game-title">{game.title}</h3>
          </Link>
          <div className="hours-played">{`${game.hours} hrs on record`}</div>
          <Link to={`/game/${game.game_id}`} className="review-link">Review</Link>
        </div>
      </li>
    )
  }
}

export default LibraryListItem;