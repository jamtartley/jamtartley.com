import { ImageOutputItem, LinkOutputItem, TextOutputItem } from "../Terminal/TerminalOutputItem";
import React, { FC } from "react";

import { Terminal } from "../Terminal/Terminal";
import { TerminalItem } from "../Terminal/TerminalItem";

interface IBioItem {
  command: string;
  text: string;
  link?: string;
  shouldOpenNewWindow?: boolean;
}

const BioItem: FC<IBioItem> = ({ command, text, link, shouldOpenNewWindow }) => {
  const item = link ? <LinkOutputItem text={text} link={link} shouldOpenNewWindow={shouldOpenNewWindow} /> : <TextOutputItem text={text} />;

  return (
    <TerminalItem command={command} key={command}>
      {item}
    </TerminalItem>
  );
};

export const Bio: FC = () => {
  const textItems: IBioItem[] = [
    { command: "whoami", text: "Sam Hartley" },
    {
      command: "cat bio/about",
      text: "Software developer - mobile | web | games",
    },
    { command: "find /earth -name $(whoami)", text: "/UK/Newcastle" },
    {
      command: "cat bio/tech",
      text: "Node | React (+Native) | GraphQL | C# | Unity3D | *nix | DevOps",
    },
    {
      command: "cat bio/gitlab",
      text: "Gitlab",
      link: "https://gitlab.com/users/jamtartley/projects",
      shouldOpenNewWindow: true,
    },
    {
      command: "history | grep cv",
      text: "CV",
      link: "https://cv-sam-hartley.s3.eu-west-2.amazonaws.com/cv.pdf",
      shouldOpenNewWindow: true,
    },
    {
      command: "cat bio/email",
      text: "sam@jamtartley.com",
      link: `mailto:sam@jamtartley.com`,
    },
  ];

  return (
    <Terminal header="bio">
      {textItems.map(BioItem)}
      <TerminalItem command="sxiv sam.png">
        <ImageOutputItem imageLocation="sam.png" />
      </TerminalItem>
    </Terminal>
  );
};
