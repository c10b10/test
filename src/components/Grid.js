import styled from "styled-components";

import theme, { mediaQuery } from "../theme";

const Column = styled.div`
  margin-bottom: ${theme.defaultSpace};
`;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: calc(100% + ${theme.gutter});
  margin-left: -${theme.gutter};
  margin-bottom: -${theme.defaultSpace};
`;

const ContainerPadding = styled(Container)`
  ${Column} {
    padding-left: ${theme.gutter};
    width: 100%;

    ${mediaQuery.m`
      width: 50%;
    `}

    ${mediaQuery.l`
      width: calc(100% / 3);
    `}
  }
`;

const ContainerMargin = styled(Container)`
  ${Column} {
    margin-left: ${theme.gutter};
    width: calc(100% - ${theme.gutter});

    ${mediaQuery.m`
      width: calc(50% - ${theme.gutter});
    `}

    ${mediaQuery.l`
      width: calc(100% / 3 - ${theme.gutter});
    `}
  }
`;

export const Padding = {
  Column: Column,
  Container: ContainerPadding
};

export const Margin = {
  Column: Column,
  Container: ContainerMargin
};
