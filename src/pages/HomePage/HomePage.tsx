import React, { FC } from "react";

import { Terminal } from "../../components/Terminal";
import sizes from "../../sizes";
import styled from "styled-components";

export const HomePage: FC = () => {
  const Wrapper = styled.div`
    display: flex;
    height: 100%;

    @media (max-width: ${sizes.MOBILE}) {
      flex-direction: column;
    }
  `;

  return (
    <Wrapper>
      <Terminal>T1</Terminal>
      <Terminal>T2</Terminal>
    </Wrapper>
  );
};
