import { Web, webItems } from "./Web";
import { render, screen } from "@testing-library/react";

import { MemoryRouter } from "react-router-dom";
import React from "react";

describe("[Web]", () => {
  beforeEach(() => {
    render(<Web />, { wrapper: MemoryRouter });
  });

  it("displays items for every app", () => {
    for (const item of webItems) {
      expect(screen.getByText(item.title)).toBeInTheDocument();
    }
  });
});
