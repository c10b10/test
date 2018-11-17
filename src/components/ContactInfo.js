import React from "react";
import styled from "styled-components";

import theme from "../theme";
import profilePNG from "../assets/icons/profile.png";

const Avatar = styled.img`
  border-radius: 100%;
  border: 1px solid ${theme.colors.accent};
  padding: ${theme.spaces.s};
  width: ${theme.spaces.l};
  margin-right: ${theme.spaces.base};
  background-image: url(${profilePNG}) no-repeat;
  width: 53px;
  height: 53px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export default function ContactInfo({ contact }) {
  return (
    <Wrapper>
      <Avatar src={profilePNG} />
      <div>
        <div>{contact.name}</div>
        <div>{contact.phone}</div>
      </div>
    </Wrapper>
  );
}
