import { LinkOutputItem, TextOutputItem } from "../Terminal/TerminalOutputItem";
import React, { FC } from "react";

import { Terminal } from "../Terminal/Terminal";
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
    <TerminalItem command="cat bio/about">
      <TextOutputItem text="Software developer - web | mobile | games" />
    </TerminalItem>
  );
};

const WhereAmI: FC = () => {
  return (
    <TerminalItem command="find /earth -name $(whoami)">
      <TextOutputItem text="/UK/London/Wimbledon" />
    </TerminalItem>
  );
};

const Technology: FC = () => {
  return (
    <TerminalItem command="cat bio/tech">
      <TextOutputItem text="Node | React | React Native | GraphQL | C# | Unity3D | *nix | SRE" />
    </TerminalItem>
  );
};

const CV: FC = () => {
  return (
    <TerminalItem command="history | grep cv">
      <LinkOutputItem text="CV" link={"https://cv-sam-hartley.s3.eu-west-2.amazonaws.com/cv.pdf"} shouldOpenNewWindow={true} />
    </TerminalItem>
  );
};

const ContactInfo: FC = () => {
  return (
    <TerminalItem command="cat bio/email">
      <LinkOutputItem text="sam@jamtartley.com" link={"mailto:sam@jamtartley.com"} />
    </TerminalItem>
  );
};

export const Bio: FC = () => {
  return (
    <Terminal header="bio">
      <WhoAmI />
      <WhatAmI />
      <WhereAmI />
      <Technology />
      <CV />
      <ContactInfo />
    </Terminal>
  );
};
