import React, { FC } from "react";

import { TerminalBlock } from "../Terminal/TerminalBlock";
import { TextOutputItem } from "../Terminal/TerminalOutputItem";

export const UnderConstruction: FC = () => {
  return (
    <>
      <TerminalBlock command="ssh guest@jamtartley.com">
        <TextOutputItem text="Under construction..." />
      </TerminalBlock>
    </>
  );
};
