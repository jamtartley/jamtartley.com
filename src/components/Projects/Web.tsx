import React, { FC } from "react";

import { HR } from "../Terminal/HR";
import { LinkOutputWrapper } from "../Terminal/TerminalOutputItem";
import { Terminal } from "../Terminal/Terminal";
import { TerminalItem } from "../Terminal/TerminalItem";

export interface IWebItem {
  title: string;
  description: string;
  tech: string;
  links: IWebItemLinks;
}

interface IWebItemLinks {
  live?: string;
  source: string;
}

interface IWebItemProps {
  item: IWebItem;
}

export const WebItem: FC<IWebItemProps> = ({
  item: {
    title,
    description,
    tech,
    links: { live, source },
  },
}) => {
  return (
    <div>
      <HR />
      <i>{title} </i>- {description}
      {" | "}
      {tech}
      {" | "}
      {live && (
        <LinkOutputWrapper href={live} target="_blank" rel="noreferrer">
          [Link]
        </LinkOutputWrapper>
      )}{" "}
      <LinkOutputWrapper href={source} target="_blank" rel="noreferrer">
        [Source]{" "}
      </LinkOutputWrapper>
      <HR />
    </div>
  );
};

export const webItems: IWebItem[] = [
  {
    title: "jamtartley.com",
    description: "Personal webpage",
    tech: "TS/React",
    links: { source: "https://gitlab.com/jamtartley/jamtartley-com" },
  },
  {
    title: "minions_js",
    description: "Boids simulation with quadtree spatial partitioning",
    tech: "JS/Webpack",
    links: { live: "https://minions.jamtartley.com", source: "https://gitlab.com/jamtartley/minions_js" },
  },
];

export const Web: FC = () => {
  return (
    <Terminal header="web">
      <TerminalItem command="ls projects/web/"></TerminalItem>
      {webItems.map((item, idx) => (
        <WebItem key={idx} item={item} />
      ))}
    </Terminal>
  );
};
