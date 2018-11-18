import React from "react";
import styled from "styled-components";

import theme from "./theme";
// This could imported in one go, if exported through index
import Widget from "./components/Widget";
import AlphabetFilter from "./components/AlphabetFilter";
import Search from "./components/Search";
import CardList from "./components/Cards";
import { VCenter, Section } from "./components/Layout";

export default function RouteIndex() {
  return (
    <Widget>
      <VCenter>
        <Search />
      </VCenter>
      <VCenter as={Section}>
        <AlphabetFilter />
      </VCenter>
      <CardList />
    </Widget>
  );
}
