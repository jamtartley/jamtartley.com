import { AppItems, Apps } from "./Apps";
import { render, screen } from "@testing-library/react";

import { MemoryRouter } from "react-router-dom";
import React from "react";

describe("[Apps]", () => {
  beforeEach(() => {
    render(<Apps />, { wrapper: MemoryRouter });
  });

  it("displays items for every app", () => {
    for (const item of AppItems) {
      expect(screen.getByText(item.title)).toBeInTheDocument();
    }
  });
});
