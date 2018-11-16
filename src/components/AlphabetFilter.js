import React, { Component } from "react";
import styled, { css } from "styled-components";

import theme from "../theme";

const Letter = styled.a`
  color: ${theme.colors.accent};
  cursor: pointer;
  text-decoration: none;
  transition: color 0.15s ease-in;
  text-transform: uppercase;
  font-weight: bold;

  &:hover,
  &:active,
  &:focus,
  &.is-active {
    color: ${theme.colors.primary};
    transition: color 0.15s ease-in;
    text-decoration: underline;
  }

  &.is-active {
    cursor: default;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  ${Letter} + ${Letter} {
    margin-left: ${theme.spaces.base};
  }
  margin: ${theme.spaces.base} 0;
  justify-content: center;
`;

export default function AlphabetFilter(props) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");

  return (
    <Wrapper>
      {alphabet.map(letter => (
        <Letter key={letter} to={"/"} href="#">
          {letter}
        </Letter>
      ))}
    </Wrapper>
  );
}
