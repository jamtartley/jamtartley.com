import React, { FC } from "react";

import styled from "styled-components";

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Header = styled.h1`
  font-size: 3rem;
`;

export const UnderConstruction: FC = () => {
  return (
    <Wrapper>
      <Header>Under construction</Header>
    </Wrapper>
  );
};
