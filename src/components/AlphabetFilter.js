import React, { Component } from "react";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

const Letter = styled.a`
  text-transform: uppercase;
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

export default function Filterng({ match }) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  console.log(match);

  return (
    <Wrapper>
      {alphabet.map(letter => (
        <Letter href="#">{letter}</Letter>
      ))}
    </Wrapper>
  );
}
