import React from "react";
import styled, { css } from "styled-components";

import theme from "./theme";
// This could imported in one go, if exported through index
import * as Widget from "./components/Widget";
import AlphabetFilter from "./components/AlphabetFilter";
// import Search from "./components/Search";
import CardList from "./components/CardList";

export default function RouteMain() {
  return (
    <Widget.Main>
      {/* <Search /> */}
      <AlphabetFilter />
      <CardList />
    </Widget.Main>
  );
}
