import { LinkOutputItem, TextOutputItem } from "../Terminal/TerminalOutputItem";
import React, { FC } from "react";

import { TerminalBlock } from "../Terminal/TerminalBlock";

const WhoAmI: FC = () => {
  return (
    <TerminalBlock command="whoami">
      <TextOutputItem text="Sam Hartley" />
    </TerminalBlock>
  );
};

const WhatAmI: FC = () => {
  return (
    <TerminalBlock command="whatami">
      <TextOutputItem text="Software developer - web | mobile | games" />
    </TerminalBlock>
  );
};

const WhereAmI: FC = () => {
  return (
    <TerminalBlock command="whereami">
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
      <WhatAmI />
      <WhereAmI />
      <ContactInfo />
    </>
  );
};
