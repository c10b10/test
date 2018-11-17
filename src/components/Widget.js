import styled from "styled-components";

import theme from "../theme";

const Widget = styled.div`
  border-radius: ${theme.borderRadius.base};
  background-color: ${theme.colors.main};
  position: relative;
  max-width: ${theme.cardMaxWidth};
  ::before {
    content: "";
    width: 100%;
    background-color: ${theme.colors.accent};
    display: block;
    height: 10px;
    border-radius: ${theme.borderRadius.base} ${theme.borderRadius.base} 0 0;
  }
`;

export default Widget;
