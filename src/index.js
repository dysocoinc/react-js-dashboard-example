import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";

import AdminLayout from "layouts/Admin/Admin.jsx";
import PublicLayout from "layouts/Public/Public.jsx";

import "assets/scss/black-dashboard-react.scss";
import "assets/demo/demo.css";
import "assets/css/nucleo-icons.css";

const hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route path="/admin" render={props => <AdminLayout {...props} />} />
      <Route path="/public" render={props => <PublicLayout {...props} />} />
      <Redirect from="/" to="/public/home" />
      <Redirect from="/public/admin" to="/admin/home" />
    </Switch>
  </Router>,
  document.getElementById("root")
);
