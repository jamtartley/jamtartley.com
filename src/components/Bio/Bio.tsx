import { ImageOutputItem, LinkOutputItem, TextOutputItem } from "../Terminal/TerminalOutputItem";
import React, { FC } from "react";

import { Terminal } from "../Terminal/Terminal";
import { TerminalItem } from "../Terminal/TerminalItem";

interface IBioItem {
  command: string;
  textParts: {
    text: string;
    link?: string;
    shouldOpenNewWindow?: boolean;
  }[];
}

const BioItem: FC<IBioItem> = ({ command, textParts }) => {
  return (
    <TerminalItem command={command} key={command}>
      {textParts.map((t, i) => (t.link ? <LinkOutputItem {...t} key={i} /> : <TextOutputItem {...t} key={i} />))}
    </TerminalItem>
  );
};

export const Bio: FC = () => {
  const textItems: IBioItem[] = [
    { command: "whoami", textParts: [{ text: "Sam Hartley" }] },
    { command: "find /earth -name $(whoami)", textParts: [{ text: "/UK/London" }] },
    {
      command: "cat bio/about",
      textParts: [
        {
          text: "Senior software engineer ",
        },
        {
          text: "@notonthehighstreet",
          link: "https://notonthehighstreet.com",
          shouldOpenNewWindow: true,
        },
      ],
    },
    {
      command: "cat bio/tech",
      textParts: [{ text: "Node | React (+Native) | GraphQL | C# | Unity3D | *nix | DevOps" }],
    },
    {
      command: "cat bio/gitlab",
      textParts: [
        {
          text: "Gitlab",
          link: "https://gitlab.com/users/jamtartley/projects",

          shouldOpenNewWindow: true,
        },
      ],
    },
    {
      command: "cat bio/linkedin",
      textParts: [
        {
          text: "Linkedin",
          link: "https://uk.linkedin.com/in/sam-hartley-bb39a823a",

          shouldOpenNewWindow: true,
        },
      ],
    },
    {
      command: "history | grep cv",
      textParts: [
        {
          text: "CV",
          link: "https://cv-sam-hartley.s3.eu-west-2.amazonaws.com/cv.pdf",
          shouldOpenNewWindow: true,
        },
      ],
    },
    {
      command: "cat bio/email",
      textParts: [{ text: "sam@jamtartley.com", link: `mailto:sam@jamtartley.com` }],
    },
  ];

  return (
    <Terminal header="bio">
      {textItems.map(BioItem)}
      <TerminalItem command="xdg-open sam.png">
        <ImageOutputItem imageLocation="sam.jpg" />
      </TerminalItem>
    </Terminal>
  );
};
