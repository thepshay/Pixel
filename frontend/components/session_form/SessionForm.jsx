import React from "react";

class SessionForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      username: props.user.username,
      password: props.user.password,
      errors: []
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.processForm(this.state)
      .fail(() => this.setState({errors: this.props.errors}));
  }

  handleChange(field) {
    return (e) => this.setState({[field] : e.currentTarget.value})
  }

  handleDemo() {
    const demoUser = {username: 'user1', password:'123456'};
    this.props.loginDemo(demoUser);
  }

  render() {
    const userForm = this.props.formType === 'signup' ? {
      action: 'CREATE YOUR ACCOUNT',
      className: 'signup-container',
      submitText: 'Sign Up'
    } : {
      action: 'SIGN IN',
      className: 'login-container',
      submitText: 'Sign In'
    }

    return(
      <div className={userForm.className}>
        <h1 className="title">{userForm.action}</h1>
        <ul>
          {this.state.errors.map((error, index) => <li key={index}>{error}</li>)}
        </ul>
        <form>
          <div className="username-input">
            <div>Pixel account name</div>
            <input id='username' type='text' value={this.state.username} onChange={this.handleChange('username')}/>
          </div>
          <div className="password-input">
            <div>Password</div>
            <input id='password' type='password' value={this.state.password} onChange={this.handleChange('password')}/>
          </div>
        </form>
        <div className='submit-btn' onClick={(e)=>this.handleSubmit(e)}>{userForm.submitText}</div>
        <div className='demo-link' onClick={()=>this.handleDemo()}>Sign in as demo user</div>
      </div>
    )
  }
}

export default SessionForm;