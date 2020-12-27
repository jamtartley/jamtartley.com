import React, { FC } from "react";

import { Avatar } from "../../components/Avatar/Avatar";
import { PersonalInfo } from "../../components/PersonalInfo/PersonalInfo";
import { Projects } from "../../components/Projects/Projects";
import sizes from "../../sizes";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  width: 100%;

  @media (max-width: ${sizes.MOBILE}) {
    flex-direction: column;
  }
`;

interface ISectionGroupWrapperProps {
  direction?: "row" | "column";
}

const SectionGroupWrapper = styled.div<ISectionGroupWrapperProps>`
  display: flex;
  flex-grow: 1;
  flex-direction: ${props => props.direction || "row"};
`;

export const HomePage: FC = () => {
  return (
    <Wrapper>
      <SectionGroupWrapper>
        <PersonalInfo />
      </SectionGroupWrapper>
      <SectionGroupWrapper direction="column">
        <Projects />
        <Avatar />
      </SectionGroupWrapper>
    </Wrapper>
  );
};
