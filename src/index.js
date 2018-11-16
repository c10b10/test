import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import injectGlobalStyles from "./global-styles";
import App from "./App";

injectGlobalStyles();

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);
