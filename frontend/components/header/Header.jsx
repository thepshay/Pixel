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
    this.props.logout(this.props.currentUser.id)
      .then(this.props.history.push('/'));
  }


  render() {
    const { currentUser, logout } = this.props;

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
          <img className="profile-img" src={currentUser.photoUrl} alt='profile-picture'/>
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
          <div className="header-content">
            <Link to='/'>
              <div className="home">
                <img className='icon' src={window.icon} alt='Pixel logo'/>
                <h1 className="logo">Pixel</h1>
              </div>
            </Link>
            <ul className="header-links">
              <li>
                <a href='https://github.com/thepshay/Pixel' className="github-link links" target="_blank">GitHub</a>
              </li>
              <li>
                <a href='https://www.linkedin.com/in/thepshay/' className="linkedin-link links" target="_blank">LinkedIn</a>
              </li>
              <li>
                <a href='https://angel.co/u/perry-xie' className="github-link links" target="_blank">AngelList</a>
              </li>
            </ul>
          </div>
          {currentUser ? loggedInDiv() : notLoggedInDiv()}
        </div>
      </div>
    )
  }
}

export default Header;