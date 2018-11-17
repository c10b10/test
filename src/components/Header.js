import React from "react";
import styled from "styled-components";

import theme from "../theme";

const HeaderStyled = styled.header`
  color: white;
  display: flex;
  justify-content: center;
  padding: ${theme.spaces.xl} 0;
`;

const H1 = styled.h1`
  margin: 0;
`;

export default function Header() {
  return (
    <HeaderStyled>
      <H1>My Address Book</H1>
    </HeaderStyled>
  );
}
