import React from "react";
import Async from "react-async";

import { fetchCards } from "../helpers";
import Card from "./Card";

const CardList = () => (
  <Async promiseFn={fetchCards}>
    {({ data, error, isLoading }) => {
      if (isLoading) return "Loading...";
      if (error) return error.message;
      if (data.length) return data.map(contact => <Card contact={contact} />);
    }}
  </Async>
);

export default CardList;
