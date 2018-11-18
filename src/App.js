import React from "react";
import { Route } from "react-router-dom";

import Main from "./components/Main";
import Header from "./components/Header";
import RouteIndex from "./RouteIndex";
import RouteContact from "./RouteContact";

export default function App() {
  return (
    <Main>
      <Header>My Address Book</Header>
      <Route path="/" exact component={RouteIndex} />
      <Route path="/contact/:contact" component={RouteContact} />
    </Main>
  );
}
