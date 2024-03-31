const { compile } = require("@flam/compiler");
const { writeFileSync } = require("node:fs");
const path = require("node:path");

const entryFile = path.join(__dirname, "flam/index.flam");
const output = compile(entryFile, {
	bio: [
		{ command: "whoami", output: [{ text: "Sam Hartley" }] },
		{ command: "find /earth -name $(whoami)", output: [{ text: "/UK/London" }] },
		{
			command: "cat bio/about",
			output: [
				{ text: "Senior software engineer" },
				{
					link: {
						href: "https://humaans.io",
						text: "@humaans.io",
					},
				},
			],
		},
		{
			command: "cat bio/skills",
			output: [{ list: ["TS/JS", "React (+Native)", "REST/GraphQL", "C#", "*nix", "AWS", "Terraform"] }],
		},
		{
			command: "history | grep cv",
			output: [{ link: { href: "https://cv-sam-hartley.s3.eu-west-2.amazonaws.com/cv.pdf", text: "CV" } }],
		},
		{
			command: "cat bio/gitlab",
			output: [{ link: { href: "https://gitlab.com/jamtartley", text: "Gitlab" } }],
		},
		{
			command: "cat bio/linkedin",
			output: [{ link: { href: "https://uk.linkedin.com/in/sam-hartley-bb39a823a", text: "Linkedin" } }],
		},
		{
			command: "cat bio/email",
			output: [{ link: { href: "mailto:sam@jamtartley.com", text: "sam@jamtartley.com" } }],
		},
		{ command: "xdg-open sam.jpg", output: [{ image: "sam.jpg" }] },
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

writeFileSync(path.join(__dirname, "public", "index.html"), output);
