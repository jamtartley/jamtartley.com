import { compile } from "@flam/compiler";
import { writeFileSync } from "node:fs";
import path from "node:path";

const entryFile = "flam/index.flam";
const output = compile(entryFile, {
	bio: [
		{ command: "whoami", output: "Sam Hartley" },
		{ command: "find /earth -name $(whoami)", output: "/UK/London" },
		{ command: "cat bio/about", output: "Senior software engineer @humaans.io" },
		{ command: "cat bio/skills", output: "TS/JS | React (+Native) | REST/GraphQL | C# | *nix | AWS | Terraform" },
		{
			command: "history | grep cv",
			output: "CV",
			link: "https://cv-sam-hartley.s3.eu-west-2.amazonaws.com/cv.pdf",
		},
		{ command: "cat bio/gitlab", output: "Gitlab", link: "https://gitlab.com/jamtartley" },
		{ command: "cat bio/linkedin", output: "Linkedin", link: "https://uk.linkedin.com/in/sam-hartley-bb39a823a" },
		{ command: "cat bio/email", output: "sam@jamtartley.com", link: "mailto:sam@jamtartley.com" },
		{ command: "xdg-open sam.jpg", image: "sam.jpg" },
	],
	project_groups: [
		{
			category: "misc",
			color: "cyan",
			projects: [
				{
					name: "flam",
					description: "Compiled templating language",
					tech: ["Typescript"],
					links: {
						source: "https://gitlab.com/jamtartley/flam",
					},
				},
				{
					name: "dotfiles",
					description: "Arch linux/macOS installation scripts",
					tech: ["Ansible", "*sh", "Lua"],
					links: {
						source: "https://gitlab.com/jamtartley/dotfiles",
					},
				},
				{
					name: "taggregator",
					description: "Tag lines of code with prioritised issues and quickly display them for a ready-made TODO list",
					tech: ["Python"],
					links: {
						source: "https://gitlab.com/jamtartley/taggregator",
					},
				},
			],
		},
		{
			category: "web",
			color: "yellow",
			projects: [
				{
					name: "jamtartley.com",
					description: "Personal webpage",
					tech: ["flam"],
					links: { source: "https://gitlab.com/jamtartley/jamtartley-com" },
				},
				{
					name: "minions_js",
					description: "Boids simulation with quadtree spatial partitioning",
					tech: ["Javascript"],
					links: {
						live: "https://minions.jamtartley.com",
						source: "https://gitlab.com/jamtartley/minions_js",
					},
				},
			],
		},
		{
			category: "apps",
			color: "green",
			projects: [
				{
					name: "sixfives",
					description:
						"Mobile app which algorithmically generates a compilation video with a selection of user uploads",
					tech: ["Typescript", "AWS", "Turborepo"],
					links: { source: "https://gitlab.com/jamtartley/sixfives" },
				},
			],
		},
	],
});

writeFileSync(path.join(process.cwd(), "public", "index.html"), output);
