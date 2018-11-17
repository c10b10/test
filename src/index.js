import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import GlobalStyle from "./GlobalStyle";
import App from "./App";

ReactDOM.render(
  <Router>
    <React.Fragment>
      <GlobalStyle />
      <App />
    </React.Fragment>
  </Router>,
  document.getElementById("root")
);
