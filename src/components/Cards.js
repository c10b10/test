import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import theme, { mediaQuery } from "../theme";
import { DataContext } from "../helpers";
import ContactInfo from "./ContactInfo";
import * as Grid from "./Grid";
import { VCenter } from "./Layout";

const Card = styled(Link)`
  background-color: white;
  padding: ${theme.spaces.base};
  border-radius: ${theme.borderRadius.small};
  display: flex;
  align-items: center;
  width: 100%;

  color: ${theme.colors.text};
  text-decoration: none;
  cursor: pointer;
  transition: color 0.15s ease-in;

  &:hover,
  &:active,
  &:focus,
  &.is-active {
    color: ${theme.colors.grey.eighty};
    transition: color 0.15s ease-in;
    text-decoration: none;
  }
`;

export default function CardList({ cards = [] }) {
  if (!cards.length) return <VCenter>Nothing here.</VCenter>;
  return (
    <Grid.Padding.Container>
      {cards.map((contact, index) => (
        <Grid.Padding.Column key={index}>
          <Card to={`/contact/${contact.username}`}>
            <ContactInfo contact={contact} />
          </Card>
        </Grid.Padding.Column>
      ))}
    </Grid.Padding.Container>
  );
}
