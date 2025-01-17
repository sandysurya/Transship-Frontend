
import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";

import AuthLayout from "layouts/Auth.js";
import AdminLayout from "layouts/Admin.js";
import RTLLayout from "layouts/RTL.js";

import { ProtectedRoute } from "./layouts/ProtectedRoute";
import { AuthProvider } from "auth-context/auth.context";
let user = localStorage.getItem("user");
user = JSON.parse(user);

ReactDOM.render(
  <AuthProvider userData={user}>
    <HashRouter>
      <Switch>
        <Route path={`/auth`} component={AuthLayout} />
        <ProtectedRoute path={`/admin`} component={AdminLayout} />
        <Redirect from={`/`} to="/admin/dashboard" />
      </Switch>
    </HashRouter>
  </AuthProvider>,
  document.getElementById("root")
);
