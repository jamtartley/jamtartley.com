import { render, screen } from "@testing-library/react";

import { AppItem } from "./Apps";
import { MemoryRouter } from "react-router-dom";
import React from "react";

describe("[AppItem]", () => {
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

  it("renders app name", () => {
    screen.getByText(app.title);
  });

  it("renders app description", () => {
    screen.getAllByText((_, node) => {
      return node?.textContent?.includes(app.description);
    });
  });

  it("populates app store links", () => {
    const { ios, android } = app.links;
    expect(screen.getByText("iOS").closest("a")).toHaveAttribute("href", ios);
    expect(screen.getByText("Android").closest("a")).toHaveAttribute("href", android);
  });
});
