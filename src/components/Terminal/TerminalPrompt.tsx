import React, { FC } from "react";

import colours from "../../colours";
import styled from "styled-components";

export interface ITerminalPromptProps {
  command: string;
}

export const TerminalPrompt: FC<ITerminalPromptProps> = ({ command }) => {
  const Wrapper = styled.p``;
  const PromptMarker = styled.span`
    color: ${colours.GREEN};
  `;
  return (
    <Wrapper>
      &gt; <PromptMarker>$ </PromptMarker>
      {command}
    </Wrapper>
  );
};
