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
  box-shadow: -4px 4px 1px 0 ${props => props.shadowColour};
  margin: 20px;
  padding: 10px;
  flex: 1;

  @media (max-width: ${sizes.MOBILE}) {
    font-size: 16px;
  }
`;

export const Terminal: FC = ({ children }) => {
  const alphaChannel = "44";
  const borderColour = getRandomElement(Object.values(accentColours));
  const shadowColour = `${borderColour}${alphaChannel}`;

  return (
    <Wrapper borderColour={borderColour} shadowColour={shadowColour}>
      {children}
    </Wrapper>
  );
};
