import React from "react";
import styled, { css } from "styled-components";

import theme from "./theme";
// This could imported in one go, if exported through index
import Widget from "./components/Widget";
import AlphabetFilter from "./components/AlphabetFilter";
import Search from "./components/Search";
import CardList from "./components/CardList";
import * as Layout from "./components/Layout";

const Main = styled(Widget.withComponent("main"))`
  max-width: ${theme.mainMaxWidth};
  margin-right: auto;
  margin-left: auto;
  margin-top: ${theme.spaces.base};
`;

const Section = styled(Layout.VCenter)`
  margin-top: ${theme.spaces.base};
  margin-bottom: ${theme.spaces.base};
`;

export default function RouteMain() {
  return (
    <Main>
      <Section>
        <Search />
      </Section>
      <Section>
        <AlphabetFilter />
      </Section>
      <CardList />
    </Main>
  );
}
