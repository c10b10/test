import React, { Component } from "react";
import styled, { css } from "styled-components";
import { Redirect, withRouter } from "react-router";
import { Route, Switch } from "react-router-dom";
import Async from "react-async";
import { fetchCards } from "./helpers";

import { DataContext } from "./helpers";
import Header from "./components/Header";
import RouteMain from "./RouteMain";
import RouteContact from "./RouteContact";

class App extends Component {
  state = {
    data: [],
    filter: false
  };

  static getDerivedStateFromProps(props, state) {
    if (props.data !== state.data) {
      return {
        data: props.data
      };
    }
    return null;
  }

  setFilter(letter) {
    this.setState({
      filter: letter.toUpperCase()
    });
  }

  getData() {
    if (this.state.filter) {
      return this.state.data.filter(
        contact => contact.name.charAt(0).toUpperCase() === this.state.filter
      );
    }
    return this.state.data;
  }

  render() {
    return (
      <DataContext.Provider value={this.getData()}>
        <Header>My Address Book</Header>
        <Route path="/" exact component={RouteMain} />
        <Route path="/contact/:contact" component={RouteContact} />
      </DataContext.Provider>
    );
  }
}

export default function Provider() {
  return (
    <Async promiseFn={fetchCards}>
      {({ data, error, isLoading }) => {
        if (isLoading) return "Loading...";
        if (error) return error.message;
        if (data) return <App data={data} />;
      }}
    </Async>
  );
}
