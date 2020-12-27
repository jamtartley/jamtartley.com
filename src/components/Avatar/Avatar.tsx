import React, { FC } from "react";

import { ImageOutputItem } from "../Terminal/TerminalOutputItem";
import { Terminal } from "../Terminal/Terminal";
import { TerminalItem } from "../Terminal/TerminalItem";

export const Avatar: FC = () => {
  return (
    <Terminal>
      <TerminalItem command="sxiv sam.png">
        <ImageOutputItem imageLocation="sam.png" />
      </TerminalItem>
    </Terminal>
  );
};
