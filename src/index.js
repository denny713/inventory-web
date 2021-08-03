import React from "react";
import ReactDOM from "react-dom";
import AuthLayout from "component/layout/AuthLayout";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/auth" render={(props) => <AuthLayout {...props} />} />
      <Redirect from="/" to="/auth/login" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);