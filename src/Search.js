import React, { Component } from "react";
import styled, { css } from "styled-components";

import theme from "./theme";

const Wrapper = styled.div`
  position: relative;
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
  padding: ${theme.inputs.spacing};
  line-height: ${theme.lineHeights.inputs};

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

const ButtonWrapper = styled.div`
  top: 50%;
  transform: translate(0, -50%);
  width: 18px;
  height: 21px;
  left: 0;
  display: flex;
`;

const Search = () => (
  <Wrapper>
    <ButtonWrapper>
      <img src="/icons/loupe.png" />
    </ButtonWrapper>
    <Input placeholder="Search" />
  </Wrapper>
);

export default Search;
