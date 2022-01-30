import React from "react";
import {Link} from 'react-router-dom';

class GenreSidebar extends React.Component {

  componentDidMount() {
    if (this.props.genres.length === 0) {
      this.props.fetchAllGames();
    }
  }

  changeToTitle(str) {
    const words = str.split('-');
    return words.map(word => {
      return this.capitalize(word)
    }).join(' ');
  }

  capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  render() {
    const {genres} = this.props;
    
    if (genres.length === 0) {
      return null;
    }

    return (
      <div className="genre-sidebar">
        <img className='steam-cash-img' src={window.steamCash} />
        <h2 className="genre-title">BROWSE BY GENRE</h2>
        <ul className="genre-list">
          {genres.map((genre, index) => {
            return (
              <li key={index} className="genre-name">
                <Link to={`/genre/${genre}`}>{this.changeToTitle(genre)}</Link>
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
}

export default GenreSidebar