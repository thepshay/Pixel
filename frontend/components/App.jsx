import React from "react";
import { Route, HashRouter, Switch, Redirect } from 'react-router-dom';
import HeaderContainer from "./header/HeaderContainer";
import LoginFormContainer from "./session_form/LoginFormContainer";
import SignupFormContainer from "./session_form/SignupFormContainer";
import HomePage from "./Home/HomePage";
import Footer from './footer/Footer'
import { AuthRoute, ProtectedRoute } from '../util/route_util'
import GenrePageContainer from "./genre/GenrePageContainer";
import ShowGameContainer from "./show_page/ShowGameContainer";
import CartPageContainer from './cart_items/CartPageContainer'

class App extends React.Component {

  render() {
    return (
      <div className="main-content">
        <HeaderContainer />
        <HashRouter>
          <Switch>
            <AuthRoute path="/login" component={LoginFormContainer}  />
            <AuthRoute path="/signup" component={SignupFormContainer} />
            <Route exact path='/genre/:genreName' component={GenrePageContainer} />
            <Route exact path='/game/:gameId' component={ShowGameContainer} />
            <ProtectedRoute exact path='/cart' component={CartPageContainer} />
            <Route exact path='/' component={HomePage}/>
            <Redirect to="/" />
          </Switch>
        </HashRouter>
        <Footer />
      </div>
    )
  }
}

export default App;