import React from "react";
import LibraryListItem from "./LibraryListItem";

class LibraryList extends React.Component {

  render() {
    const {library} = this.props
    
    const sortedLibrary = Object.values(library).sort((a,b) => (a.hours < b.hours) ? 1 : -1);

    return (
      <ul className="library-list">
        {sortedLibrary.map((game,index) => {
          return (
            <LibraryListItem key={index} game={game} />
          )
        })}
      </ul>
    )
  }
}

export default LibraryList;