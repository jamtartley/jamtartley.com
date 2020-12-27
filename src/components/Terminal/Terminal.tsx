import React, { FC } from "react";
import colours, { accentColours } from "../../colours";

import { getRandomElement } from "../../utils";
import sizes from "../../sizes";
import styled from "styled-components";

interface IWrapperProps {
  borderColour: string;
  shadowColour: string;
}

const Wrapper = styled.div<IWrapperProps>`
  overflow: auto;
  background: ${colours.TERMINAL_BACKGROUND};
  color: ${colours.FOREGROUND};
  border: 4px solid ${props => props.borderColour};
  font-size: 25px;
  font-family: monospace;
  box-shadow: -8px 8px 0 0 ${props => props.shadowColour};
  margin: 20px;
  flex: 1;

  @media (max-width: ${sizes.MOBILE}) {
    font-size: 16px;
  }
`;

const ChildWrapper = styled.div`
  padding: 10px;
`;

const HeaderWrapper = styled.div<{ backgroundColour: string }>`
  background: ${props => props.backgroundColour};
  padding: 20px;
  font-style: italic;
  font-weight: 700;
  color: ${colours.TERMINAL_BACKGROUND};
`;

interface IHeaderProps {
  backgroundColour: string;
  header: string;
}

const Header: FC<IHeaderProps> = ({ backgroundColour, header }) => {
  return <HeaderWrapper backgroundColour={backgroundColour}>{header}</HeaderWrapper>;
};

export interface ITerminalProps {
  header: string;
}

export const Terminal: FC<ITerminalProps> = ({ header, children }) => {
  const alphaChannel = "44";
  const borderColour = getRandomElement(Object.values(accentColours));
  const shadowColour = `${borderColour}${alphaChannel}`;

  return (
    <Wrapper borderColour={borderColour} shadowColour={shadowColour}>
      <Header backgroundColour={borderColour} header={header} />
      <ChildWrapper>{children}</ChildWrapper>
    </Wrapper>
  );
};
