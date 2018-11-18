import React from "react";
import Async from "react-async";

import { fetchCards } from "./helpers";

export const DataContext = React.createContext();

// This would normally be done with Redux, but it's overkill for this app.
class Store extends React.Component {
  state = {
    filter: false,
    search: ""
  };

  actions = {
    setFilter: this.setFilter.bind(this),
    resetFilter: this.setFilter.bind(this, false),
    setSearch: this.setSearch.bind(this),
    resetSearch: this.setSearch.bind(this, "")
  };

  // Sets the Alphabet letter filtering
  setFilter(letter) {
    this.setState({
      filter: letter
    });
  }

  // Sets the Query
  setSearch(query) {
    this.setState({
      search: query
    });
  }

  render() {
    return (
      <DataContext.Provider
        value={{
          store: {
            contacts: this.props.data,
            ...this.state
          },
          actions: this.actions
        }}
      >
        {this.props.children}
      </DataContext.Provider>
    );
  }
}

export default function Provider({ children }) {
  return (
    <Async promiseFn={fetchCards}>
      {({ data, error, isLoading }) => {
        if (isLoading) return "Loading...";
        if (error) return error.message;
        if (data) return <Store data={data}>{children}</Store>;
      }}
    </Async>
  );
}
