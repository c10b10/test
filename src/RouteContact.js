import React from "react";
import styled, { css } from "styled-components";

import theme from "./theme";
import { getContact, DataContext } from "./helpers";
import Widget from "./components/Widget";
import ContactInfo from "./components/ContactInfo";

export default function RouteContact({ match }) {
  return (
    <DataContext.Consumer>
      {data => (
        <Widget>
          <ContactInfo contact={getContact(data, match.params.contact)} />
        </Widget>
      )}
    </DataContext.Consumer>
  );
}
