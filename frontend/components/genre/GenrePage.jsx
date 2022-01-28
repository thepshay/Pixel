import React from "react";

class GenrePage extends React.Component {

  render() {
    const { genreId } = this.props;

    return (
      <div>
        {genreId}
      </div>
    )
  }
}

export default GenrePage;