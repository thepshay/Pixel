import React from 'react';

class GameList extends React.Component {

  componentDidMount() {
    if (Object.keys(this.props.games).length === 0) {
      this.props.fetchAllGames();
    }
  }

  render() {

    const { className } = this.props;
    console.log(this.props.games)
    return (
      <div className={className}>
        <ul>
          {Object.values(this.props.games).map(game => {
            return (
              <li>{game.title}</li>
            )
          })}
        </ul>
      </div>
    )
  }
}

export default GameList;