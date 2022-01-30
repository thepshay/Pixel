import React from 'react';
import GameInfo from './GameInfo';

class GameDisplay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currIndex: 0
    }
  }

  changeDisplayIndex(e, index) {
    this.setState({currIndex: index})
  }

  render() {
    const {game} = this.props;

    return (
      <div className='game-display'>
        <div className='img-container'>
          <img className='main-img' src={game.photoUrls[this.state.currIndex]}/>
          <ul className='screenshot-list'>
            {game.photoUrls.map((url, index) => {
              return (
                <li 
                  key={index}
                  onClick={(e) => this.changeDisplayIndex(e, index)}
                >
                  <img 
                    className={this.state.currIndex === index ? 'screenshot-img active' : 'screenshot-img'}
                    src={url}
                  />
                </li>
              )
            })}
          </ul>
        </div>
        <GameInfo 
          game={game}
        />
      </div>
    )
  }
}

export default GameDisplay;