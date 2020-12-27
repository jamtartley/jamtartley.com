import { ITerminalPromptProps, TerminalPrompt } from "./TerminalPrompt";
import React, { FC } from "react";

import styled from "styled-components";

const Wrapper = styled.div`
  margin-bottom: 40px;
`;

export const TerminalBlock: FC<ITerminalPromptProps> = ({ command, children }) => {
  return (
    <Wrapper>
      <TerminalPrompt command={command} />
      {children}
    </Wrapper>
  );
};
