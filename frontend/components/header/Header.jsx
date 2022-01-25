import React from "react";
import { Link } from 'react-router-dom';
import UserDropdown from "./UserDropdown";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
    }

    window.addEventListener('click', e=>{
      if (e.target.parentElement === null){
        this.setState({show: false})
      } else if (!e.target.parentElement.matches('div.dropdown-btn')){
        this.setState({show: false})
      }
    })
  }
  
  toggleDropdown(e) {
    console.log('target: ', e.target);
    console.log('current target: ', e.currentTarget);
    console.log('curre')
    if (e.currentTarget.matches("div.dropdown-btn")) {
      this.setState({show: !this.state.show});
      console.log(this.state.show)
    } else {

      console.log(e.currentTarget)
    }
  }

  render() {
    const { currentUser, logout } = this.props;


    const loggedInDiv = () => (
      <div className="user-display-container">
        <div className="username-display">
          <div 
            className="dropdown-btn"
            onClick={(e)=>this.toggleDropdown(e)}>
            <div >{currentUser.username}</div>
            <i className='fas fa-caret-down' />
          </div>
          <UserDropdown 
            logout={logout} 
            currentUser={currentUser}
            className={this.state.show ? 'user-dropdown show' : 'user-dropdown'}/>
        </div>
        <img className="temp-img" src={currentUser.photoUrl} />
      </div>
    )

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
            <h1>Logo :)</h1>
          </Link>
          {currentUser ? loggedInDiv() : notLoggedInDiv()}
        </div>
      </div>
    )
  }
}

export default Header;