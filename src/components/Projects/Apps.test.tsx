import { render, screen } from "@testing-library/react";

import { Apps } from "./Apps";
import { MemoryRouter } from "react-router-dom";
import React from "react";

describe("[Apps]", () => {
  beforeEach(() => {
    render(<Apps />, { wrapper: MemoryRouter });
  });

  it("displays items for every app", () => {
    expect(screen.getByText(/Word Trail/)).toBeInTheDocument();
    expect(screen.getByText(/Color Smash/)).toBeInTheDocument();
  });
});
