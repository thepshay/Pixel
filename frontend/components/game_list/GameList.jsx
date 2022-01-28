import React from 'react';
import GameListItem from './GameListItem';
import InfoDisplay from './InfoDisplay';

class GameList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currGame: 0
    }
  }

  componentDidMount() {
    this.props.fetchAllGames();
  }

  setCurrGame(e, game) {
    this.setState({currGame: game})
  }

  render() {
    const { className, games } = this.props;
    
    if (!games[0]) {
      return null
    }

    return (
      <div className={className}>
        <div className='game-list-header'>
          <h3 className='game-list-title'>More Games</h3>
        </div>
        <ul>
          {games.map((game, index) => {
            return (
              <GameListItem 
                className={(index === this.state.currGame) ? 'game-list-item active' : 'game-list-item'}
                game={game} 
                key={game.id} 
                onMouseEnter={(e) => this.setCurrGame(e, index)}
                gap={index === this.state.currGame}
              />
            )
          })}
        </ul>
        <ul>
          {games.map((game, index) => {
            return (
              <InfoDisplay 
                className={(index === this.state.currGame) ? 'info-display active' : 'info-display'}
                game={game} 
                key={game.id} 
              />
            )
          })}
        </ul>
      </div>
    )
  }
}

export default GameList;