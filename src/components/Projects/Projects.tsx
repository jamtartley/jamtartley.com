import { LinkOutputItem, TextOutputItem } from "../Terminal/TerminalOutputItem";
import React, { FC } from "react";

import { Terminal } from "../Terminal/Terminal";
import { TerminalItem } from "../Terminal/TerminalItem";
import colours from "../../colours";
import styled from "styled-components";

const apps: IApp[] = [
  {
    title: "Word Trail",
    description: "Unique daily word puzzles",
    links: {
      ios: "https://apps.apple.com/us/app/word-trail-daily-puzzles/id1539438681",
      android: "https://play.google.com/store/apps/details?id=com.jamtartley.wordage",
    },
  },
  {
    title: "Color Smash",
    description: "Hyper-casual tile matcher",
    links: {
      ios: "https://apps.apple.com/us/app/color-smash-build-chains/id1540480646",
      android: "https://play.google.com/store/apps/details?id=com.jamtartley.colorsmash",
    },
  },
];

interface IApp {
  title: string;
  description: string;
  links: IAppLinks;
}

interface IAppLinks {
  ios: string;
  android: string;
}

interface IAppItemProps {
  app: IApp;
}

const HR = styled.hr`
  border: 1px dashed ${colours.FOREGROUND};
`;

export const AppItem: FC<IAppItemProps> = ({
  app: {
    title,
    description,
    links: { ios, android },
  },
}) => {
  return (
    <>
      <HR />
      <TextOutputItem text={`${title} - ${description}`} />
      <LinkOutputItem text="iOS" link={ios} shouldOpenNewWindow={true} />
      <LinkOutputItem text="Android" link={android} shouldOpenNewWindow={true} />
      <HR />
    </>
  );
};

export const Projects: FC = () => {
  return (
    <Terminal header="personal_projects">
      <TerminalItem command="ls apps/">
        {apps.map((app, idx) => (
          <AppItem key={idx} app={app} />
        ))}
      </TerminalItem>
    </Terminal>
  );
};
