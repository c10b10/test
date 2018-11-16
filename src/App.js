import React, { Component } from "react";
import styled, { css } from "styled-components";
import { Redirect, withRouter } from "react-router";
import { Route, Switch } from "react-router-dom";

import CardList from "./components/CardList";
import theme, { paddingTopWithHeaderMixin } from "./theme";
import Search from "./Search";
import * as Widget from "./Widget";

const Wrapper = styled.div`
  ${paddingTopWithHeaderMixin(theme.defaultSpace, theme.spaces.xl)};
`;

const HeaderStyled = styled.header``;

const MainStyled = styled.main`
  ${Widget.widgetBodyMixin};

  max-width: ${theme.mainMaxWidth};
  margin-right: auto;
  margin-left: auto;
`;

const Letter = styled.a`
  text-transform: uppercase;
`;

const Alphabet = styled.div`
  display: flex;
  flex-direction: row;
  ${Letter} + ${Letter} {
    margin-left: ${theme.spaces.base};
  }
  margin: ${theme.spaces.base} 0;
  justify-content: center;
`;

const AlphabeticBar = () => {
  const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");

  return (
    <Alphabet>
      {alphabet.map(letter => (
        <Letter href="#">{letter}</Letter>
      ))}
    </Alphabet>
  );
};

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
        <MainStyled>
          <Widget.Bar />
          <Search />
          <AlphabeticBar />
          <CardList />
        </MainStyled>
      </React.Fragment>
    );
  }
}

export default App;
