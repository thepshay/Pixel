import { connect } from "react-redux";
import { signup } from "../../actions/session_actions";
import SessionForm from './SessionForm';

const mapStateToProps = (state) => {
  return {
    user: {
      username: '',
      password: '',
    },
    formType: 'signup',
    errors: state.errors
  }
}

const mapDispatchToProps = dispatch => {
  return ({
    processForm: (user) => dispatch(signup(user))
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm)