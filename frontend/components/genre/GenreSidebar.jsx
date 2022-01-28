import React from "react";

class GenreSidebar extends React.Component {

  componentDidMount() {
    if (this.props.genres.length === 0) {
      this.props.fetchAllGames();
    }
  }

  render() {
    const {genres} = this.props;

    return (
      <div className="genre-sidebar">
        <img className='steam-cash-img' src={window.steamCash} />
        <h2 className="genre-title">BROWSE BY GENRE</h2>
        <ul className="genre-list">
          {genres.map((genre, index) => {
            return (
              <li className="genre-name">{genre}</li>
            )
          })}
        </ul>
      </div>
    )
  }
}

export default GenreSidebar