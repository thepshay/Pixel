import React from "react";

class SessionForm extends React.Component{
  constructor(props){
    super(props);
    this.state = props.user
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.processForm(this.state);
  }

  handleChange(field) {
    return (e) => this.setState({[field] : e.currentTarget.value})
  }

  render() {
    const userForm = this.props.formType === 'signup' ? {
      action: 'Sign Up',
      className: 'signup-container'
    } : {
      action: 'Sign In',
      className: 'login-container'
    }

    return(
      <div className={userForm.className}>
        <h1>{userForm.action}</h1>
        <form>
        <div className="username-input">
          <div>Pixel account name</div>
          <input id='username' type='text' value={this.state.username} onChange={this.handleChange('username')}/>
        </div>
        <div className="password-input">
          <div>Password</div>
          <input id='password' type='password' value={this.state.password} onChange={this.handleChange('password')}/>
        </div>
        {/* <button type='submit'>{userForm.action}</button> */}
        </form>
        <div className='submit-btn' onClick={(e)=>this.handleSubmit(e)}>{userForm.action}</div>
        <ul>
          {this.props.errors.map((error, index) => <li key={index}>{error}</li>)}
        </ul>
      </div>
    )
  }
}

export default SessionForm;