import React, { Component } from "react";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

import theme, { mediaQuery } from "../theme";
import { getUserFromEmail } from "../helpers";
import ContactInfo from "./ContactInfo";

const Wrapper = styled(Link)`
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

export const Card = ({ contact }) => (
  <Wrapper to={`/contact/${contact.username}`}>
    <ContactInfo contact={contact} />
  </Wrapper>
);

export default Card;
