import React, { FC } from "react";

import { HR } from "../Terminal/HR";
import { LinkOutputWrapper } from "../Terminal/TerminalOutputItem";
import { Terminal } from "../Terminal/Terminal";
import { TerminalItem } from "../Terminal/TerminalItem";

interface IWebItem {
  title: string;
  description: string;
  links: IWebItemLinks;
}

interface IWebItemLinks {
  live: string;
  source: string;
}

interface IWebItemProps {
  item: IWebItem;
}

const WebItem: FC<IWebItemProps> = ({
  item: {
    title,
    description,
    links: { live, source },
  },
}) => {
  return (
    <div>
      <HR />
      <i>{title} </i>- {description}
      {" | "}
      <LinkOutputWrapper href={live} target="_blank" rel="noreferrer">
        [Link]
      </LinkOutputWrapper>{" "}
      <LinkOutputWrapper href={source} target="_blank" rel="noreferrer">
        [Source]{" "}
      </LinkOutputWrapper>
      <HR />
    </div>
  );
};

export const Web: FC = () => {
  const webItems: IWebItem[] = [
    {
      title: "minions_js",
      description: "Boids simulation with quadtree spatial partitioning",
      links: { live: "https://minions.jamtartley.com", source: "https://gitlab.com/jamtartley/minions_js" },
    },
    {
      title: "path_js",
      description: "Pathfinding and maze generation visualisation",
      links: { live: "https://path.jamtartley.com", source: "https://gitlab.com/jamtartley/path_js" },
    },
  ];

  return (
    <Terminal header="web">
      <TerminalItem command="ls web/"></TerminalItem>
      {webItems.map((item, idx) => (
        <WebItem key={idx} item={item} />
      ))}
    </Terminal>
  );
};
