import React from 'react';
import GameListItem from './GameListItem';
import InfoDisplay from './InfoDisplay';

class GameList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currGame: null
    }
  }

  componentDidMount() {
    this.props.fetchAllGames();
  }

  setCurrGame(e, game) {
    console.log('hello')
    this.setState({currGame: game})
  }

  removeCurrGame() {
    console.log('bye')
    this.setState({currGame: null})
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
              <GameListItem 
                game={game} 
                key={game.id} 
                onMouseEnter={(e) => this.setCurrGame(e, game)}
                onMouseLeave={() => this.removeCurrGame()}
              />
            )
          })}
        </ul>
        {(this.state.currGame) && <InfoDisplay game={this.state.currGame} />}
      </div>
    )
  }
}

export default GameList;