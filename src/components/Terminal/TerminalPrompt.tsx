import React, { FC } from "react";

import colours from "../../colours";
import styled from "styled-components";

export interface ITerminalPromptProps {
  command: string;
}

const Wrapper = styled.p``;
const PromptMarker = styled.span`
  color: ${colours.GREEN};
`;

export const TerminalPrompt: FC<ITerminalPromptProps> = ({ command }) => {
  return (
    <Wrapper>
      &gt; <PromptMarker>$ </PromptMarker>
      {command}
    </Wrapper>
  );
};
