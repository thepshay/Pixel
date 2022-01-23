import React from "react";
import { Link } from 'react-router-dom';


class Header extends React.Component {

  render() {

    const { currentUser, logout } = this.props;

    const loggedInDiv = () => (
      <div>
        <h1>Welcome {currentUser.username}</h1>
        <button onClick={()=>logout(currentUser.id)}>Logout</button>
      </div>
    )

    const notLoggedInDiv = () => (
      <div>
        <Link to='/login'>Login</Link><br/>
        <Link to='/signup'>Sign Up</Link>
      </div>
    )

    return (
      <div className="header">
        <h1>Pixel</h1>
        {currentUser ? loggedInDiv() : notLoggedInDiv()}
      </div>
    )
  }
}

export default Header;