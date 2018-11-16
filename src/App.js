import React, { Component } from "react";
import styled, { css } from "styled-components";
import { Redirect, withRouter } from "react-router";
import { Route, Switch } from "react-router-dom";

import RouteMain from "./RouteMain";
// import RouteContact from "./RouteContact";
import theme, { paddingTopWithHeaderMixin } from "./theme";

const Wrapper = styled.div`
  ${paddingTopWithHeaderMixin(theme.defaultSpace, theme.spaces.xl)};
`;

const HeaderStyled = styled.header``;

const CardsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  padding: ${theme.spaces.m};
`;

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <HeaderStyled>My Address Book</HeaderStyled>
        <Route path="/" exact component={RouteMain} />
        {/* <Route path="/contact/:contactId" component={RouteContact} /> */}
      </React.Fragment>
    );
  }
}

export default App;
