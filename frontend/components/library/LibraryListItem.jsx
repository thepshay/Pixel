import React from "react";

class LibraryListItem extends React.Component {

  render() {
    const {game} = this.props;

    return (
      <li className='library-list-item'>
        <img className='library-game-header' src={game.headerUrl} />
        <div className="library-game-details">
          <h3 className="game-title">{game.title}</h3>
          <div className="hours-played">{`${game.hours} hrs on record`}</div>
        </div>
      </li>
    )
  }
}

export default LibraryListItem;