import React, { Component } from "react";
import {AuthorizationContext} from "./services/Authorization";

export default class CallBackHandeler extends Component {
  render() {
    return (
      <AuthorizationContext.Consumer>
        {({actions}) => <Callback location={this.props.location} handleAuthentication={actions.handleAuthentication} />}
      </AuthorizationContext.Consumer>
    );
  }
}

class Callback extends Component {
  authorizeIfAuthenticated = href => {
    if (/id_token|error/.test(href)) {
      // redirects to / when complete
      this.props.handleAuthentication();
    }
  }

  render() {
    // Reach router passes in location.href by default lets check it for the token
    // Redirect to '/' if it's there.
    this.authorizeIfAuthenticated(this.props.location.href);
    return (
      <div>
        <p>Loading...</p>
      </div>
    );
  }
}
