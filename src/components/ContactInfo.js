import React from "react";
import styled from "styled-components";

import theme from "../theme";

const Avatar = styled.img`
  border-radius: 100%;
  border: 1px solid ${theme.colors.accent};
  padding: ${theme.spaces.s};
  width: ${theme.spaces.l};
  margin-right: ${theme.spaces.base};
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export default function ContactInfo({ contact }) {
  return (
    <Wrapper>
      <Avatar src="http://hoarding.s3-eu-west-1.amazonaws.com/profile.png" />
      <div>
        <div>{contact.name}</div>
        <div>{contact.phone}</div>
      </div>
    </Wrapper>
  );
}
