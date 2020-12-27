import { LinkOutputItem, TextOutputItem } from "../Terminal/TerminalOutputItem";
import React, { FC } from "react";

import { TerminalItem } from "../Terminal/TerminalItem";

const WhoAmI: FC = () => {
  return (
    <TerminalItem command="whoami">
      <TextOutputItem text="Sam Hartley" />
    </TerminalItem>
  );
};

const WhatAmI: FC = () => {
  return (
    <TerminalItem command="whatami">
      <TextOutputItem text="Software developer - web | mobile | games" />
    </TerminalItem>
  );
};

const WhereAmI: FC = () => {
  return (
    <TerminalItem command="whereami">
      <TextOutputItem text="/UK/London/Wimbledon" />
    </TerminalItem>
  );
};

const ContactInfo: FC = () => {
  return (
    <TerminalItem command="contact">
      <LinkOutputItem text="sam@jamtartley.com" link={"mailto:sam@jamtartley.com"} />
    </TerminalItem>
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
