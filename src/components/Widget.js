import React, { Component } from "react";
import styled, { css } from "styled-components";

import theme from "../theme";

const Bar = styled.div`
  border-top-left-radius: ${theme.borderRadius.base};
  border-top-right-radius: ${theme.borderRadius.base};
  background-color: ${theme.colors.accent};
  width: 100%;
  height: 20px;
`;

const Body = styled.div`
  border-radius: ${theme.borderRadius.base};
  background-color: ${theme.colors.main};
  position: relative;
  padding-top: 10px;
  max-width: ${theme.cardMaxWidth};
  ${Bar} {
    position: absolute;
    top: 0;
  }
`;

const BodyMain = styled(Body.withComponent("main"))`
  max-width: ${theme.mainMaxWidth};
  margin-right: auto;
  margin-left: auto;
`;

export const Main = ({ children }) => (
  <BodyMain>
    <Bar />
    {children}
  </BodyMain>
);

export const Div = ({ children }) => (
  <Body>
    <Bar />
    {children}
  </Body>
);
