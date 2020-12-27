import { LinkOutputItem, TextOutputItem } from "../Terminal/TerminalOutputItem";
import React, { FC } from "react";

import { TerminalItem } from "../Terminal/TerminalItem";
import { useRouteMatch } from "react-router-dom";

export const Error: FC = () => {
  const { url } = useRouteMatch();

  return (
    <>
      <TerminalItem command={`goto ${url}`}>
        <TextOutputItem text={`command not found: ${url.substr(1)}`} />
      </TerminalItem>
      <TerminalItem command="help_me">
        <LinkOutputItem text="Click here to go home" link="/" />
      </TerminalItem>
    </>
  );
};
