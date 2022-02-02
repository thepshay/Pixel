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
        <Link to={`/library/${currentUser.id}`}>
          <li>Library</li>
        </Link>
        <li onClick={()=>logout(currentUser.id)}>
          Logout: <span>{currentUser.username}</span>
        </li>
        <Link to='/library/2'><li>22222222</li></Link>
        <Link to='/library/3'><li>33333333</li></Link>
        <Link to='/library/4'><li>444444444</li></Link>
      </ul>
    )
  }
}

export default UserDropdown;