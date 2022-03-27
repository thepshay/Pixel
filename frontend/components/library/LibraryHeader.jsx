import React from "react";

class LibraryHeader extends React.Component {

  render() {
    const { user } = this.props;

    return (
      <div className="library-header">
        <img className='profile-pic' src={user.photoUrl} alt='profile picture'/> 
        <div className="username-container">
          <h2 className="username">{user.username}</h2>
        </div>
      </div>
    )
  }
}

export default LibraryHeader;