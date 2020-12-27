import { ITerminalPromptProps, TerminalPrompt } from "./TerminalPrompt";
import React, { FC } from "react";

import styled from "styled-components";

const Wrapper = styled.div`
  max-height: 100%;
  margin-bottom: 30px;
`;

export const TerminalItem: FC<ITerminalPromptProps> = ({ command, children }) => {
  return (
    <Wrapper>
      <TerminalPrompt command={command} />
      {children}
    </Wrapper>
  );
};
