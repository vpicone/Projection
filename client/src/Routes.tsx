import { Router } from "@reach/router";
import * as React from "react";

import App from "./App";
import Callback from "./Callback";
import { AuthorizationProvider } from "./services/Authorization";

export default () => {
  return (
    <AuthorizationProvider>
      <Router>
        <App path="/" />
        <Callback path="/callback" />
      </Router>
    </AuthorizationProvider>
  );
};
