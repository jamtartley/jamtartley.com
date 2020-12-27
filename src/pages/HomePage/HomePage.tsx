import React, { FC } from "react";

import { PersonalInfo } from "../../components/PersonalInfo/PersonalInfo";
import { Projects } from "../../components/Projects/Projects";
import sizes from "../../sizes";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  height: 100%;

  @media (max-width: ${sizes.MOBILE}) {
    flex-direction: column;
  }
`;

export const HomePage: FC = () => {
  return (
    <Wrapper>
      <PersonalInfo />
      <Projects />
    </Wrapper>
  );
};
