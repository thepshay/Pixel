import React from "react";
import LibraryListItem from "./LibraryListItem";

class LibraryList extends React.Component {

  render() {
    const {library} = this.props
    return (
      <ul>
        {Object.values(library).map((game,index) => {
          return <li key={index}>{game.title}</li>
        })}
      </ul>
    )
  }
}

export default LibraryList;