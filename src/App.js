import React, { Component } from "react";
import styled, { css } from "styled-components";
import { Redirect, withRouter } from "react-router";
import { Route, Switch } from "react-router-dom";
import Async from "react-async";

import { fetchCards, DataContext } from "./helpers";
import Header from "./components/Header";
import RouteMain from "./RouteMain";
import RouteContact from "./RouteContact";

// The app is too simple to justify breaking the rendering components
// to separate files
class App extends Component {
  render() {
    return (
      <Async promiseFn={fetchCards}>
        {({ data, error, isLoading }) => {
          if (isLoading) return "Loading...";
          if (error) return error.message;
          if (data.length)
            return (
              <DataContext.Provider value={data}>
                <Header>My Address Book</Header>
                <Route path="/" exact component={RouteMain} />
                <Route path="/contact/:contact" component={RouteContact} />
              </DataContext.Provider>
            );
        }}
      </Async>
    );
  }
}

export default App;
