import React, { FC } from "react";

import { HR } from "../Terminal/HR";
import { LinkOutputWrapper } from "../Terminal/TerminalOutputItem";

export type ProjectItemProps = {
	title: string;
	description: string;
	tech: string;
	links: {
		live?: string;
		source: string;
	};
};

export const ProjectItem: FC<ProjectItemProps> = ({ title, description, tech, links: { live, source } }) => {
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
