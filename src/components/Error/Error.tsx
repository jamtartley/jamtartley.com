import { LinkOutputItem, TextOutputItem } from "../Terminal/TerminalOutputItem";
import React, { FC } from "react";

import { TerminalBlock } from "../Terminal/TerminalBlock";
import { useRouteMatch } from "react-router-dom";

export const Error: FC = () => {
  const { url } = useRouteMatch();

  return (
    <>
      <TerminalBlock command={`goto ${url}`}>
        <TextOutputItem text={`command not found: ${url.substring(1)}`} />
      </TerminalBlock>
      <TerminalBlock command="help_me">
        <LinkOutputItem text="Click here to go home" link="/" />
      </TerminalBlock>
    </>
  );
};
