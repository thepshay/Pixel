import React from "react";
import {Link} from 'react-router-dom';
import { changeToTitle } from '../../util/utilities';

class GenreSidebar extends React.Component {

  componentDidMount() {
    if (this.props.genres.length === 0) {
      this.props.fetchAllGames();
    }
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
                <Link to={`/genre/${genre}`}>{changeToTitle(genre)}</Link>
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
}

export default GenreSidebar