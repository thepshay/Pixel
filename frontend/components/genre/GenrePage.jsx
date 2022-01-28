import React from "react";

class GenrePage extends React.Component {

  componentDidMount() {
    if (!this.props.genreId) {
      this.props.fetchAllGames()
    }
  }

  render() {
    const { genreId, games } = this.props;
    
    if (!genreId) {
      return null;
    }
    console.log(genreId)

    return (
      <div>
        <ul>
          {genreId.map((id, index) => {
            return <li key={index}>{games[id].title}</li>
          })}
        </ul>
      </div>
    )
  }
}

export default GenrePage;