import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

class UserDropdown extends React.Component {
  
  render() {
    const {currentUser, className} = this.props;

    return (
      <ul className={className}>
        <Link to='/cart'>
          <li>Cart</li>
        </Link>
        <Link to={`/library/${currentUser.id}`}>
          <li>Library</li>
        </Link>
        <li onClick={()=>this.props.logoutUser()}>
          Logout: <span>{currentUser.username}</span>
        </li>
      </ul>
    )
  }
}

export default UserDropdown;