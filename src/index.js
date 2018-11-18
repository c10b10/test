import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import GlobalStyle from "./GlobalStyle";
import Provider from "./Provider";
import App from "./App";

ReactDOM.render(
  <Router>
    <React.Fragment>
      <GlobalStyle />
      <Provider>
        <App />
      </Provider>
    </React.Fragment>
  </Router>,
  document.getElementById("root")
);
