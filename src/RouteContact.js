import React from "react";
import styled from "styled-components";

import { DataContext } from "./state/Provider";
import { getContact } from "./state/selectors";
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
      {({ store }) => (
        <SmallWidget>
          <ContactInfo contact={getContact(match.params.contact)(store)} />
        </SmallWidget>
      )}
    </DataContext.Consumer>
  );
}
