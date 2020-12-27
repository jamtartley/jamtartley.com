import { LinkOutputItem, TextOutputItem } from "../Terminal/TerminalOutputItem";
import React, { FC } from "react";

import { TerminalBlock } from "../Terminal/TerminalBlock";

const WhoAmI: FC = () => {
  return (
    <TerminalBlock command="whoami">
      <TextOutputItem text="Sam Hartley" />
      <TextOutputItem text="Software developer" />
      <TextOutputItem text="Web | mobile | games" />
    </TerminalBlock>
  );
};

const WhereAmI: FC = () => {
  return (
    <TerminalBlock command="find . -name $(whoami --name-only)">
      <TextOutputItem text="/UK/London/Wimbledon" />
    </TerminalBlock>
  );
};

const ContactInfo: FC = () => {
  return (
    <TerminalBlock command="contact">
      <LinkOutputItem text="sam@jamtartley.com" link={"mailto:sam@jamtartley.com"} />
    </TerminalBlock>
  );
};

export const PersonalInfo: FC = () => {
  return (
    <>
      <WhoAmI />
      <WhereAmI />
      <ContactInfo />
    </>
  );
};
