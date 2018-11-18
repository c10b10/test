import styled from "styled-components";

import theme from "../theme";

const barHeight = "10px";
const widgetPadding = theme.spaces.l;

const Widget = styled.div`
  border-radius: ${theme.borderRadius.base};
  background-color: ${theme.colors.main};
  position: relative;
  width: 100%;
  padding: ${widgetPadding};
  padding-top: calc(${widgetPadding} + ${barHeight});
  ::before {
    content: "";
    width: calc(100%);
    background-color: ${theme.colors.accent};
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    height: ${barHeight};
    border-radius: ${theme.borderRadius.base} ${theme.borderRadius.base} 0 0;
  }

  > * + * {
    margin-top: ${theme.widgetPadding};
  }
`;

export default Widget;
