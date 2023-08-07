import React, { FC } from "react";

import { HR } from "../Terminal/HR";
import { LinkOutputWrapper } from "../Terminal/TerminalOutputItem";
import { Terminal } from "../Terminal/Terminal";
import { TerminalItem } from "../Terminal/TerminalItem";

interface IMiscItem {
	title: string;
	description: string;
	language: string;
	source: string;
}

interface IMiscItemProps {
	item: IMiscItem;
}

export const MiscItem: FC<IMiscItemProps> = ({ item: { title, description, language, source } }) => {
	return (
		<div>
			<HR />
			<i>{title} </i>- {description}
			{" | "}
			{language}
			{" | "}
			<LinkOutputWrapper href={source} target="_blank" rel="noreferrer">
				[Source]{" "}
			</LinkOutputWrapper>
			<HR />
		</div>
	);
};

export const MiscItems: IMiscItem[] = [
	{
		title: "taggregator",
		description: "Tag lines of code with prioritised issues and quickly display them for a ready-made TODO list",
		language: "Python",
		source: "https://gitlab.com/jamtartley/taggregator",
	},
	{
		title: "SHEL",
		description: "Simple interpreted programming language",
		language: "C++",
		source: "https://gitlab.com/jamtartley/SHEL",
	},
	{
		title: "dotfiles",
		description: "Arch linux/macOS installation scripts",
		language: "Ansible/*sh",
		source: "https://gitlab.com/jamtartley/dotfiles",
	},
];

export const Misc: FC = () => {
	return (
		<Terminal header="misc">
			<TerminalItem command="ls projects/misc/"></TerminalItem>
			{MiscItems.map((item, idx) => (
				<MiscItem key={idx} item={item} />
			))}
		</Terminal>
	);
};
