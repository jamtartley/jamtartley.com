import React, { FC } from "react";

import { Terminal } from "../Terminal/Terminal";
import { TerminalItem } from "../Terminal/TerminalItem";
import { ProjectItem, ProjectItemProps } from "./ProjectItem";

export type ProjectsProps = {
	header: string;
	items: ProjectItemProps[];
};

export const Projects: FC<ProjectsProps> = ({ header, items }) => {
	return (
		<Terminal header={header}>
			<TerminalItem command={`ls projects/${header}/`}></TerminalItem>
			{items.map((item, idx) => (
				<ProjectItem key={idx} {...item} />
			))}
		</Terminal>
	);
};
