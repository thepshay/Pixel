import React from "react";
import { connect } from "react-redux";
import { login } from "../../actions/session_actions";
import SessionForm from "./SessionForm";
import LoginInfoBox from "./LoginInfoBox";


class LoginForm extends React.Component {

  render() {
    const {user, formType, errors, processForm} = this.props;

    return (
      <div className="login-main-container">
        <SessionForm 
          user={user}
          formType={formType}
          errors={errors}
          processForm={processForm} />
        <LoginInfoBox />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: {
      username: '',
      password: '',
    },
    formType: 'login',
    errors: state.errors
  }
}

const mapDispatchToProps = dispatch => {
  return ({
    processForm: (user) => dispatch(login(user))
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm)