import React, { FC } from "react";

import { Terminal } from "../Terminal/Terminal";
import { TerminalItem } from "../Terminal/TerminalItem";

export const Web: FC = () => {
  return (
    <Terminal header="web">
      <TerminalItem command="ls web/"></TerminalItem>
    </Terminal>
  );
};
