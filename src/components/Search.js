import React, { Component } from "react";
import styled, { css } from "styled-components";

import theme from "../theme";
import loupePNG from "../icons/loupe.png";

const Wrapper = styled.div`
  position: relative;
  width: 70%;
`;

const Button = styled.div`
  top: 50%;
  transform: translate(0, -50%);
  background: url(${loupePNG}) no-repeat;
  width: 18px;
  height: 21px;
  left: ${theme.spaces.s};
  display: flex;
  position: absolute;
`;

const Input = styled.input`
  /* reset */
  -webkit-appearance: none;
  -moz-appearance: none;

  &::-moz-focus-inner {
    border: 0;
    padding: 0;
  }

  border: ${theme.border};
  border-radius: ${theme.borderRadius.small};
  background-color: white;
  padding: calc(${theme.spaces.s} + ${theme.spaces.xs});
  padding-left: calc(${theme.spaces.s} + ${theme.spaces.s} + 18px);
  line-height: ${theme.lineHeights.inputs};
  width: 100%;

  &[disabled] {
    background-color: ${theme.colors.grey.five};
    color: ${theme.colors.textDisabled};
    cursor: not-allowed;
    border-color: ${theme.colors.borderLight};
  }

  &:focus {
    outline: none;
    border-color: ${theme.colors.focus};
  }
`;

const Search = () => (
  <Wrapper>
    <Button />
    <Input placeholder="SEARCH" />
  </Wrapper>
);

export default Search;
