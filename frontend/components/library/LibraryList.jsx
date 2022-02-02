import React from "react";
import LibraryListItem from "./LibraryListItem";

class LibraryList extends React.Component {

  render() {
    const {library} = this.props
    return (
      <ul className="library-list">
        {Object.values(library).map((game,index) => {
          return (
            <LibraryListItem key={index} game={game} />
          )
        })}
      </ul>
    )
  }
}

export default LibraryList;