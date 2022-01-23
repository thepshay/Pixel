import { connect } from "react-redux";
import { login } from "../../actions/session_actions";
import SessionForm from "./SessionForm";

const mapStateToProps = (state) => {
  return {
    user: {
      username: '',
      password: '',
    },
    formType: 'login'
  }
}

const mapDispatchToProps = dispatch => {
  return ({
    processForm: (user) => dispatch(login(user))
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm)