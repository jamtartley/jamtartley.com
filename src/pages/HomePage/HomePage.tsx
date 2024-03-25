import React, { FC } from "react";

import { Bio } from "../../components/Bio/Bio";
import sizes from "../../sizes";
import styled from "styled-components";
import { ProjectItemProps } from "../../components/Projects/ProjectItem";
import { Projects } from "../../components/Projects/Projects";

const Wrapper = styled.div`
	display: flex;
	width: 100%;

	@media (max-width: ${sizes.TABLET}) {
		flex-direction: column;
	}
`;

interface ISectionGroupWrapperProps {
	direction?: "row" | "column";
}

const SectionGroupWrapper = styled.div<ISectionGroupWrapperProps>`
	display: flex;
	flex: 1;
	flex-direction: ${props => props.direction || "row"};
`;

const app: ProjectItemProps[] = [
	{
		title: "sixfives",
		description: "Mobile app which algorithmically generates a compilation video with a selection of user uploads",
		tech: "TS/Terraform/AWS/Turborepo",
		links: { source: "https://gitlab.com/jamtartley/sixfives" },
	},
];

const web: ProjectItemProps[] = [
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
		links: {
			live: "https://minions.jamtartley.com",
			source: "https://gitlab.com/jamtartley/minions_js",
		},
	},
];

const misc: ProjectItemProps[] = [
	{
		title: "flam",
		description: "Compiled templating language",
		tech: "TS",
		links: {
			source: "https://gitlab.com/jamtartley/flam",
		},
	},
	{
		title: "dotfiles",
		description: "Arch linux/macOS installation scripts",
		tech: "Ansible/*sh/Lua",
		links: {
			source: "https://gitlab.com/jamtartley/dotfiles",
		},
	},
	{
		title: "taggregator",
		description: "Tag lines of code with prioritised issues and quickly display them for a ready-made TODO list",
		tech: "Python",
		links: {
			source: "https://gitlab.com/jamtartley/taggregator",
		},
	},
];

export const HomePage: FC = () => {
	return (
		<Wrapper>
			<SectionGroupWrapper>
				<Bio />
			</SectionGroupWrapper>
			<SectionGroupWrapper direction="column">
				<Projects header="misc" items={misc} />
				<Projects header="web" items={web} />
				<Projects header="apps" items={app} />
			</SectionGroupWrapper>
		</Wrapper>
	);
};
