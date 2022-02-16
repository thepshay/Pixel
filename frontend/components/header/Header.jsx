import React from "react";
import { Link } from 'react-router-dom';
import UserDropdown from "./UserDropdown";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
    }

    window.addEventListener('click', e=> {
      if (e.target.parentElement === null){
        this.setState({show: false})
      } else if (e.target.parentElement.matches('div.dropdown-btn') || e.target.matches('div.dropdown-btn')) {
        this.setState({show: !this.state.show});
      } else {
        this.setState({show: false})
      }
    })
  }

  logoutUser() {
    this.props.logout(this.props.currentUser.id);
    this.props.history.push('/');
  }


  render() {
    const { currentUser, logout } = this.props;
    console.log(this.props)

    // Header display when user is logged in
    const loggedInDiv = () => (
      <div className="user-display-container">
        <div className="username-display">
          <div 
            className="dropdown-btn">
            <div >{currentUser.username}</div>
            <i className='fas fa-caret-down' />
          </div>
          <UserDropdown 
            logout={logout} 
            currentUser={currentUser}
            className={this.state.show ? 'user-dropdown show' : 'user-dropdown'}
            logoutUser={()=>this.logoutUser()}
          />
        </div>
        <Link to={`/library/${currentUser.id}`}>
          <img className="profile-img" src={currentUser.photoUrl} />
        </Link>
      </div>
    )

    // Header display when user is NOT logged in
    const notLoggedInDiv = () => (
      <div className="signin-link-container">
        <Link className='signup-link' to='/signup'>Sign Up</Link>
        <Link className='login-link' to='/login'>Login</Link><br/>
      </div>
    )

    return (
      <div className="header">
        <div className="header-content">
          <Link to='/'>
            <div className="home">
              <img className='icon' src={window.icon} />
              <h1 className="logo">Pixel</h1>
            </div>
          </Link>
          {currentUser ? loggedInDiv() : notLoggedInDiv()}
        </div>
      </div>
    )
  }
}

export default Header;