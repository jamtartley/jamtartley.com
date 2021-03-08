import React, { FC } from "react";

import { HR } from "../Terminal/HR";
import { LinkOutputWrapper } from "../Terminal/TerminalOutputItem";
import { Terminal } from "../Terminal/Terminal";
import { TerminalItem } from "../Terminal/TerminalItem";

interface IWebItem {
  title: string;
  description: string;
  tech: string;
  links: IWebItemLinks;
}

interface IWebItemLinks {
  live: string;
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

export const WebItems: IWebItem[] = [
  {
    title: "minions_js",
    description: "Boids simulation with quadtree spatial partitioning",
    tech: "JS/Webpack",
    links: { live: "https://minions.jamtartley.com", source: "https://gitlab.com/jamtartley/minions_js" },
  },
  {
    title: "jamtartley.com",
    description: "Personal webpage (you are here)",
    tech: "React",
    links: { live: "https://jamtartley.com", source: "https://gitlab.com/jamtartley/jamtartley-com" },
  },
];

export const Web: FC = () => {
  return (
    <Terminal header="web">
      <TerminalItem command="ls projects/web/"></TerminalItem>
      {WebItems.map((item, idx) => (
        <WebItem key={idx} item={item} />
      ))}
    </Terminal>
  );
};
