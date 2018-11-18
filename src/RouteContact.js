import React from "react";
import styled from "styled-components";

import { getContact, DataContext } from "./helpers";
import theme from "./theme";
import Widget from "./components/Widget";
import ContactInfo from "./components/ContactInfo";

const SmallWidget = styled(Widget)`
  max-width: ${theme.card};
  margin: 0 auto;
`;

export default function RouteContact({ match }) {
  return (
    <DataContext.Consumer>
      {data => (
        <SmallWidget>
          <ContactInfo contact={getContact(data, match.params.contact)} />
        </SmallWidget>
      )}
    </DataContext.Consumer>
  );
}
