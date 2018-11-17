import React from "react";
import styled, { css } from "styled-components";

import theme from "./theme";
// This could imported in one go, if exported through index
import Widget from "./components/Widget";
import AlphabetFilter from "./components/AlphabetFilter";
// import Search from "./components/Search";
import CardList from "./components/CardList";

const Main = styled(Widget.withComponent("main"))`
  max-width: ${theme.mainMaxWidth};
  margin-right: auto;
  margin-left: auto;
`;

export default function RouteMain() {
  return (
      {/* <Search /> */}
    <Main>
      <AlphabetFilter />
      <CardList />
    </Main>
  );
}
