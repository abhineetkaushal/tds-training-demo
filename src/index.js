import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App, { AppTds } from "./App";
import * as serviceWorker from "./serviceWorker";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import Details from "./details";
import CSSReset from "@tds/core-css-reset";
ReactDOM.render(
  <React.StrictMode>
    <CSSReset />
    <Router>
      <Switch>
        <Route path="/beforeTDS" exact component={App}></Route>
        <Route path="/afterTDS" exact component={AppTds}></Route>
        <Route path="/:id" component={Details}></Route>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
