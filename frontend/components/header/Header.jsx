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
      <div className="signin-link-container">
        <Link className='signup-link' to='/signup' replace>Sign Up</Link>
        <Link className='login-link' to='/login' replace>Login</Link><br/>
      </div>
    )

    return (
      <div className="header">
        <div className="header-content">
          <h1>Logo :)</h1>
          {currentUser ? loggedInDiv() : notLoggedInDiv()}
        </div>
      </div>
    )
  }
}

export default Header;