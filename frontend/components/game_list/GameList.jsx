import React from 'react';
import GameListItem from './GameListItem';

class GameList extends React.Component {

  componentDidMount() {
    // if (Object.keys(this.props.games).length === 0) {
      this.props.fetchAllGames();
    // }
  }

  render() {
    const { className, games } = this.props;
    console.log(this.props)
    
    if (!games[0]) {
      return null
    }

    return (
      <div className={className}>
        <ul>
          {games.map(game => {
            return (
              <GameListItem game={game} key={game.id} />
            )
          })}
        </ul>
      </div>
    )
  }
}

export default GameList;