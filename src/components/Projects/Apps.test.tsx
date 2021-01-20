import { AppItem, Apps } from "./Apps";
import { render, screen } from "@testing-library/react";

import { MemoryRouter } from "react-router-dom";
import React from "react";

describe("Full projects tests", () => {
  beforeEach(() => {
    render(<Apps />, { wrapper: MemoryRouter });
  });

  test("All apps are mentioned", () => {
    expect(screen.getByText(/Word Trail/)).toBeInTheDocument();
    expect(screen.getByText(/Color Smash/)).toBeInTheDocument();
  });
});

describe("Apps", () => {
  const app = {
    title: "Word Trail",
    description: "Unique daily word puzzles",
    links: {
      ios: "https://apps.apple.com/us/app/word-trail-daily-puzzles/id1539438681",
      android: "https://play.google.com/store/apps/details?id=com.jamtartley.wordage",
    },
  };

  beforeEach(() => {
    render(<AppItem app={app} />, { wrapper: MemoryRouter });
  });

  test("Title and description are rendered", () => {
    expect(screen.getByText(`${app.title} - ${app.description}`)).toBeInTheDocument();
  });

  test("All links work", () => {
    const { ios, android } = app.links;
    expect(screen.getByText("iOS").closest("a")).toHaveAttribute("href", ios);
    expect(screen.getByText("Android").closest("a")).toHaveAttribute("href", android);
  });
});
