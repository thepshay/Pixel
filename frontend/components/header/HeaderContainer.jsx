import { connect } from 'react-redux';
import { Redirect, Route, withRouter } from "react-router-dom/cjs/react-router-dom.min";

import { logout } from '../../actions/session_actions';
import Header from './Header';

const mapStateToProps = (state, ownProps) => {
  return {
    currentUser: state.session.currentUser
  }
}

const mapDispatchToProps = (dispatch) => {
  return ({
    logout: () => dispatch(logout()),
  })
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header));