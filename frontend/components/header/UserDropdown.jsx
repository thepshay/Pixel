import React from "react";

class UserDropdown extends React.Component {
  

  render() {
    const {currentUser, logout, className} = this.props;

    return (
      <ul className={className}>
        <li onClick={()=>logout(currentUser.id)}>
          Logout: {currentUser.username}
        </li>
      </ul>
    )
  }
}

export default UserDropdown;