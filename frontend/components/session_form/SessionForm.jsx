import React from "react";
import ErrorBox from "./ErrorBox";

class SessionForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      username: props.user.username,
      password: props.user.password,
      errors: ''
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({errors: ''});
    this.props.processForm(this.state)
      .fail(() => this.setState({errors: this.props.errors[0]}));
  }

  handleChange(field) {
    return (e) => this.setState({[field] : e.currentTarget.value})
  }

  handleDemo() {
    const demoUser = {username: 'Demo User', password:'demmo usser'};
    this.props.loginDemo(demoUser);
  }

  render() {
    const userForm = this.props.formType === 'signup' ? {
      title: 'CREATE YOUR ACCOUNT',
      className: 'signup-container',
      submitText: 'Sign Up'
    } : {
      title: 'SIGN IN',
      className: 'login-container',
      submitText: 'Sign In'
    }

    return(
      <div className={userForm.className}>
        <h1 className="title">{userForm.title}</h1>

        <ErrorBox errors={this.state.errors} 
          className={this.state.errors ? 'error-container show' : 'error-container'}/>
        

        <form>
          <div className="username-input">
            <div>Pixel account name</div>
            <input id='username' type='text' value={this.state.username} onChange={this.handleChange('username')}/>
          </div>
          <div className="password-input">
            <div>Password</div>
            <input id='password' type='password' value={this.state.password} onChange={this.handleChange('password')}/>
          </div>
          <button className='submit-btn' onClick={(e)=>this.handleSubmit(e)}>
            <span>{userForm.submitText}</span>
          </button>
        </form>
        <div className='demo-link' onClick={()=>this.handleDemo()}>Sign in as demo user</div>
      </div>
    )
  }
}

export default SessionForm;