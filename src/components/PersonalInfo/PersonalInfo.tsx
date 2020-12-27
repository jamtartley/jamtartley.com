import React, { FC } from "react";

import { TerminalPrompt } from "../Terminal/TerminalPrompt";

export const PersonalInfo: FC = () => {
  return <TerminalPrompt command="whoami" />;
};
