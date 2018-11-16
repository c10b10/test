import React from "react";
import Async from "react-async";

import { DataContext } from "../helpers";
import Card from "./Card";

const CardList = () => (
  <DataContext>
    {data => {
      return data.map(contact => <Card contact={contact} />);
    }}
  </DataContext>
);

export default CardList;
