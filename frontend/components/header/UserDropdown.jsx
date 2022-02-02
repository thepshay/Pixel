import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

class UserDropdown extends React.Component {
  

  render() {
    const {currentUser, logout, className} = this.props;

    return (
      <ul className={className}>
        <Link to='/cart'>
          <li>Cart</li>
        </Link>
        <Link to='/library'>
          <li>Library</li>
        </Link>
        <li onClick={()=>logout(currentUser.id)}>
          Logout: <span>{currentUser.username}</span>
        </li>
      </ul>
    )
  }
}

export default UserDropdown;