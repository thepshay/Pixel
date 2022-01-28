import React from 'react';

class InfoDisplay extends React.Component {

  render() {
    const {game} = this.props;

    return (
      <div>{game.title}</div>
    )
  }
}

export default InfoDisplay;