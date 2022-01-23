import { connect } from 'react-redux';

import { logout } from '../../actions/session_actions';
import Header from './Header';

const mapStateToProps = (state) => {
  return {
    currentUser: state.session.currentUser
  }
}

const mapDispatchToProps = (dispatch) => {
  return ({
    logout: () => dispatch(logout())
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);