import React, { FC } from "react";

import colours from "../../colours";
import styled from "styled-components";
import { useRouteMatch } from "react-router-dom";

export interface ITerminalPromptProps {
  command: string;
}

const Wrapper = styled.div`
  margin-bottom: 2px;
`;

const PromptLocation = styled.span`
  color: ${colours.CYAN};
`;
const PromptArrow = styled.span`
  color: ${colours.CYAN};
`;
const PromptMarker = styled.span`
  color: ${colours.GREEN};
`;

export const TerminalPrompt: FC<ITerminalPromptProps> = ({ command }) => {
  const { url } = useRouteMatch();
  const route = url.substr(1);
  const display = `~${route && "/"}${route}`;

  return (
    <Wrapper>
      <PromptLocation>{display} </PromptLocation>
      <PromptArrow>&gt; </PromptArrow>
      <PromptMarker>$ </PromptMarker>
      {command}
    </Wrapper>
  );
};
