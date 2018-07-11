import React, { Component } from 'react';
import Home from './pages/home/Home';
import LandingPage from './pages/landing-page/LandingPage';
import {AuthorizationContext} from './services/Authorization';

export default class App extends Component {
  render() {
    return (
      <AuthorizationContext.Consumer>
        {({actions, user}) => 
          actions.isAuthenticated() 
          ? <Home user={user} /> 
          : <LandingPage login={actions.login} />
        }
      </AuthorizationContext.Consumer>
    )
  }
}
