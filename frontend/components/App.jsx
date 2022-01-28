import React from "react";
import { Route, HashRouter, Switch, Redirect } from 'react-router-dom';
import HeaderContainer from "./header/HeaderContainer";
import LoginFormContainer from "./session_form/LoginFormContainer";
import SignupFormContainer from "./session_form/SignupFormContainer";
import HomePage from "./Home/HomePage";
import Footer from './footer/Footer'
import { AuthRoute } from '../util/route_util'

class App extends React.Component {

  render() {
    return (
      <div>
        <HeaderContainer />
        <HashRouter>
          <Switch>
            <AuthRoute path="/login" component={LoginFormContainer}  />
            <AuthRoute path="/signup" component={SignupFormContainer} />
            <Route exact path='/' component={HomePage}/>
            <Redirect to="/" />
          </Switch>
        </HashRouter>
      </div>
    )
  }
}

export default App;