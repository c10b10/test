import React, { Component } from "react";
import styled, { css } from "styled-components";

import theme, { mediaQuery } from "./theme";

const Wrapper = styled.div`
  background-color: white;
  padding: ${theme.spaces.base};
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

export const Card = () => (
  <Wrapper>
    <img src="http://hoarding.s3-eu-west-1.amazonaws.com/profile.png" />
    <div>
      <div>JOHN DOE</div>
      <div>12455867483</div>
    </div>
  </Wrapper>
);

export default Card;
