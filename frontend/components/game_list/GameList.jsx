import React from 'react';

class GameList extends React.Component {

  render() {

    const { className } = this.props;

    return (
      <div className={className}>
        game list
      </div>
    )
  }
}

export default GameList;