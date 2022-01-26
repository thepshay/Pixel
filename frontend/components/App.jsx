import React from "react";
import { Route, HashRouter, Switch, Redirect } from 'react-router-dom';
import HeaderContainer from "./header/HeaderContainer";
import LoginFormContainer from "./session_form/LoginFormContainer";
import SignupFormContainer from "./session_form/SignupFormContainer";
import FeatureCarouselContainer from "./carousel/FeatureCarouselContainer";
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
            <Route exact path='/' component={FeatureCarouselContainer}/>
            <Redirect to="/" />
          </Switch>
        </HashRouter>
      </div>
    )
  }
}

export default App;