import React from "react";
import Async from "react-async";

import { fetchCards, DataContext } from "./helpers";

// This would normally be done with Redux, but it's overkill for this app.
class Store extends React.Component {
  state = {
    data: [],
    filter: false,
    search: ""
  };

  actions = {
    setFilter: this.setFilter.bind(this),
    resetFilter: this.setFilter.bind(this, false),
    setSearch: this.setSearch(this),
    resetSearch: this.setSearch(this, "")
  };

  static getDerivedStateFromProps(props, state) {
    if (props.data !== state.data) {
      return {
        data: props.data
      };
    }
    return null;
  }

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

  // Filters the data using other settings in the state, and returns the
  // filtered (or not) data.
  getData() {
    let data = this.state.data;
    if (this.state.filter) {
      data = data.filter(
        contact =>
          contact.name.charAt(0).toUpperCase() ===
          this.state.filter.toUpperCase()
      );
    }
    if (this.state.search) {
      data = data.filter(contact =>
        contact.name.toUpperCase().includes(this.state.search.toUpperCase())
      );
    }
    return data;
  }

  render() {
    return (
      <DataContext.Provider
        value={{
          store: {
            cards: this.getData(),
            filter: this.state.filter,
            search: this.state.search
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
