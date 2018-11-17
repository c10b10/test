import React, { Component } from "react";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

import theme, { mediaQuery } from "../theme";
import { getUserFromEmail, DataContext } from "../helpers";
import ContactInfo from "./ContactInfo";

const Card = styled(Link)`
  background-color: white;
  padding: ${theme.spaces.base};
  border-radius: ${theme.borderRadius.small};
  display: flex;
  align-items: center;
  width: 100%;

  ${mediaQuery.m`
    width: 25%;
    margin-right: ${theme.spaces.base};
    margin-bottom: ${theme.spaces.base};
  `};

  ${mediaQuery.l`
    width: 25%;
  `};
`;

const List = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  /* margin-left: -${theme.gutter}; */
  width: calc(100% + ${theme.gutter});

  ${Card} {
    ${mediaQuery.s`
      width: calc(50% - ${theme.gutter});
    `};

    ${mediaQuery.l`
      width: calc(100% / 3 - ${theme.gutter});
    `};
  }
`;

export default class CardList extends Component {
  static contextType = DataContext;

  render() {
    const cards = this.context.map(contact => (
      <Card to={`/contact/${contact.username}`}>
        <ContactInfo contact={contact} />
      </Card>
    ));

    return <List>{cards}</List>;
  }
}
