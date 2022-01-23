import React from "react";
import { connect } from "react-redux";
import { Redirect, Route, withRouter } from "react-router-dom/cjs/react-router-dom.min";

const mapStateToProps = (state) => {
  return {
    loggedIn: Boolean(state.session.currentUser)
  }
}

const Auth = ({ component: Component, path, loggedIn, exact }) => (
  <Route
    path={path}
    exact={exact}
    render={props =>
      !loggedIn ? <Component {...props} /> : <Redirect to="/" />}
    />
)

export const AuthRoute = withRouter(connect(mapStateToProps)(Auth));
