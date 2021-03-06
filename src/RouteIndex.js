import React from "react";

import Widget from "./components/Widget";
import AlphabetFilter from "./components/AlphabetFilter";
import Search from "./components/Search";
import CardList from "./components/Cards";
import { VCenter, Section } from "./components/Layout";
import { DataContext } from "./state/Provider";
import { getFilteredContacts } from "./state/selectors";

export default function RouteIndex() {
  return (
    <Widget>
      <DataContext.Consumer>
        {/* Again, this would be done with Redux, but for such as small app,
        a custom store was implemented in ./Provider using React Context. */}
        {({ store, actions }) => (
          <>
            <VCenter>
              <Search query={store.search} setSearch={actions.setSearch} />
            </VCenter>
            <VCenter as={Section}>
              <AlphabetFilter setFilter={actions.setFilter} />
            </VCenter>
            {store.search && (
              <VCenter as={Section}>
                Searching cards containg &nbsp;
                <strong>{store.search}</strong>.
                <button
                  style={{ marginLeft: "10px" }}
                  onClick={actions.resetSearch}
                >
                  Reset
                </button>
              </VCenter>
            )}
            {store.filter && (
              <VCenter as={Section}>
                Showing cards starting with letter&nbsp;
                <strong>{store.filter.toUpperCase()}</strong>.
                <button onClick={actions.resetFilter}>Reset</button>
              </VCenter>
            )}
            <CardList contacts={getFilteredContacts(store)} />
          </>
        )}
      </DataContext.Consumer>
    </Widget>
  );
}
