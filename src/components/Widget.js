import styled from "styled-components";

import theme from "../theme";

const Widget = styled.div`
  border-radius: ${theme.borderRadius.base};
  background-color: ${theme.colors.main};
  position: relative;
  max-width: ${theme.cardMaxWidth};
  padding: ${theme.spaces.base};
  ::before {
    content: "";
    width: calc(100% + 2 * ${theme.spaces.base});
    background-color: ${theme.colors.accent};
    display: block;
    position: relative;
    left: -${theme.spaces.base};
    top: -${theme.spaces.base};
    height: 10px;
    border-radius: ${theme.borderRadius.base} ${theme.borderRadius.base} 0 0;
  }
`;

export default Widget;
