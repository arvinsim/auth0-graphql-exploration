import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Login } from "./pages/Login";
import { LoginCallback } from "./pages/LoginCallback";

export function AppRoutes() {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <Login />
        </Route>
        <Route path="/login-callback">
          <LoginCallback />
        </Route>
      </Switch>
    </Router>
  );
}
