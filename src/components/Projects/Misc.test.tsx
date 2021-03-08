import { render, screen } from "@testing-library/react";

import { MemoryRouter } from "react-router-dom";
import { Misc } from "./Misc";
import React from "react";

describe("[Misc]", () => {
  beforeEach(() => {
    render(<Misc />, { wrapper: MemoryRouter });
  });

  it("displays items for every miscellaneous project", () => {
    expect(screen.getByText(/taggregator/)).toBeInTheDocument();
    expect(screen.getByText(/SHEL/)).toBeInTheDocument();
    expect(screen.getByText(/dotfiles/i)).toBeInTheDocument();
  });
});
