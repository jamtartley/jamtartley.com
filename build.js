const { compile } = require("@jamtartley/flam");
const { writeFileSync } = require("node:fs");
const path = require("node:path");

function writeIndexPage() {
  const entryFile = path.join(__dirname, "flam/index.flam");
  const output = compile(entryFile, {
    bio: [
      { command: "whoami", output: [{ text: "Sam Hartley" }] },
      {
        command: "cat bio/about",
        output: [
          { text: "Co-Founder" },
          {
            link: {
              href: "https://addbuttr.com/?utm_source=jamtartley-com&utm_medium=referral&utm_campaign=homepage",
              text: "addbuttr",
            },
          },
        ],
      },
      {
        command: "find /earth -name $(whoami)",
        output: [{ text: "/UK/London" }],
      },
      {
        command: "cat bio/skills",
        output: [
          {
            list: ["Typescript", "C#", "Go", "*nix", "AWS", "Terraform"],
          },
        ],
      },
      {
        command: "history | grep cv",
        output: [
          {
            link: {
              href: "https://cv-sam-hartley.s3.eu-west-2.amazonaws.com/cv.pdf",
              text: "CV",
            },
          },
        ],
      },
      {
        command: "cat bio/gitlab",
        output: [
          { link: { href: "https://gitlab.com/jamtartley", text: "Gitlab" } },
        ],
      },
      {
        command: "cat bio/linkedin",
        output: [
          {
            link: {
              href: "https://uk.linkedin.com/in/sam-hartley-bb39a823a",
              text: "LinkedIn",
            },
          },
        ],
      },
      {
        command: "cat bio/email",
        output: [
          {
            link: {
              href: "mailto:sam@jamtartley.com",
              text: "sam@jamtartley.com",
            },
          },
        ],
      },
      { command: "xdg-open sam.jpg", output: [{ image: "sam.jpg" }] },
    ],
    project_groups: [
      {
        category: "tools",
        color: "cyan",
        projects: [
          {
            name: "flam",
            description: "Templating language",
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
            description:
              "Tag lines of code with prioritised issues and quickly display them for a ready-made TODO list",
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
            description: "Generate a compilation video from user uploads",
            tech: ["Typescript", "React Native", "AWS"],
            links: { source: "https://gitlab.com/jamtartley/sixfives" },
          },
        ],
      },
    ],
  });

  writeFileSync(path.join(__dirname, "public", "index.html"), output);
}

function write404Page() {
  const entryFile = path.join(__dirname, "flam/404.flam");
  const output = compile(entryFile, {});

  writeFileSync(path.join(__dirname, "public", "404.html"), output);
}

writeIndexPage();
write404Page();
