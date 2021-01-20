import React, { FC } from "react";

import { Apps } from "../../components/Projects/Apps";
import { Bio } from "../../components/Bio/Bio";
import { Web } from "../../components/Projects/Web";
import sizes from "../../sizes";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  width: 100%;

  @media (max-width: ${sizes.TABLET}) {
    flex-direction: column;
  }
`;

interface ISectionGroupWrapperProps {
  direction?: "row" | "column";
}

const SectionGroupWrapper = styled.div<ISectionGroupWrapperProps>`
  display: flex;
  flex: 1;
  flex-direction: ${props => props.direction || "row"};
`;

export const HomePage: FC = () => {
  return (
    <Wrapper>
      <SectionGroupWrapper>
        <Bio />
      </SectionGroupWrapper>
      <SectionGroupWrapper direction="column">
        <Apps />
        <Web />
      </SectionGroupWrapper>
    </Wrapper>
  );
};
