import React from "react";
import { Route, Routes, Switch } from 'react-router-dom';
import HeaderContainer from "./header/HeaderContainer";
import LoginFormContainer from "./session_form/LoginFormContainer";
import SignupFormContainer from "./session_form/SignupFormContainer";

class App extends React.Component {

  render() {
    return (
      <div>
        <HeaderContainer />
        <Switch>
          <Route path="/login" component={LoginFormContainer}  />
          <Route path="/signup" component={SignupFormContainer} />
          <Route exact path='/' />
        </Switch>
      </div>
    )
  }
}

export default App;