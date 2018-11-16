import React, { Component } from "react";
import styled, { css } from "styled-components";

import theme from "./theme";

export const Bar = styled.div`
  border-top-left-radius: ${theme.borderRadius.base};
  border-top-right-radius: ${theme.borderRadius.base};
  background-color: ${theme.colors.accent};
  width: 100%;
  height: 20px;
`;

export const widgetBodyMixin = css`
  border-radius: ${theme.borderRadius.base};
  background-color: ${theme.colors.main};
  position: relative;
  padding-top: 10px;

  ${Bar} {
    position: absolute;
    top: 0;
  }
`;
