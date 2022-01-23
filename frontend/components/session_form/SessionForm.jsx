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
    } : {
      action: 'Login'
    }

    return(
      <div>
        <h1>{userForm.action}</h1>
        <form onSubmit={(e)=>this.handleSubmit(e)}>
        <label> Username
            <input type='text' value={this.state.username} onChange={this.handleChange('username')}/>
          </label><br/>
          <label> Password
            <input type='password' value={this.state.password} onChange={this.handleChange('password')}/>
          </label><br/>
          <button type='submit'>{userForm.action}</button>
        </form>
        <ul>
          {this.props.errors.map((error, index) => <li key={index}>{error}</li>)}
        </ul>
      </div>
    )
  }
}

export default SessionForm;