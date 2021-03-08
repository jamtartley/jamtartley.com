import { MiscItem, MiscItems } from "./Misc";
import { render, screen } from "@testing-library/react";

import { MemoryRouter } from "react-router-dom";
import React from "react";
import { findInTextContent } from "../../utils/testUtils";

describe("[MiscItem]", () => {
  const item = MiscItems[0];

  beforeEach(() => {
    render(<MiscItem item={item} />, { wrapper: MemoryRouter });
  });

  it("renders project name", () => {
    screen.getByText(item.title);
  });

  it("renders project description", () => {
    findInTextContent(item.description);
  });

  it("renders app source language", () => {
    findInTextContent(item.language);
  });

  it("populates source code link", () => {
    expect(screen.getByText(/source/i).closest("a")).toHaveAttribute("href", item.source);
  });
});
