import { connect } from "react-redux";
import SessionForm from './SessionForm';
import { signup } from "../../util/session_api_util";

const mapStateToProps = (state) => {
  return {
    user: {
      username: '',
      password: '',
    },
    formType: 'signup'
  }
}

const mapDispatchToProps = dispatch => {
  return ({
    processForm: (user) => dispatch(signup(user))
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm)