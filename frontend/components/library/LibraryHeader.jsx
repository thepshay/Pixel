import React from "react";

class LibraryHeader extends React.Component {

  render() {
    return (
      <div>{this.props.user.username}</div>
    )
  }
}

export default LibraryHeader;