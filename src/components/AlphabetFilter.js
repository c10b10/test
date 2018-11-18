import React from "react";
import styled from "styled-components";

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
  flex-wrap: wrap;
  justify-content: center;
`;

export default function AlphabetFilter({ setFilter, resetFilter }) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");

  return (
    <Wrapper>
      {alphabet.map(letter => (
        <Letter
          key={letter}
          to={"/"}
          href="#"
          onClick={e => {
            e.preventDefault();
            setFilter(letter);
          }}
        >
          {letter}
        </Letter>
      ))}
    </Wrapper>
  );
}
