import React from "react";
import styled from "styled-components";

import theme from "./theme";
import Widget from "./components/Widget";
import AlphabetFilter from "./components/AlphabetFilter";
import Search from "./components/Search";
import CardList from "./components/Cards";
import { VCenter, Section } from "./components/Layout";
import { DataContext } from "./helpers";

export default function RouteIndex() {
  return (
    <Widget>
      <VCenter>
        <Search />
      </VCenter>
      <VCenter as={Section}>
        <AlphabetFilter />
      </VCenter>
      <DataContext.Consumer>
        {({ store }) => <CardList cards={store} />}
      </DataContext.Consumer>
    </Widget>
  );
}
