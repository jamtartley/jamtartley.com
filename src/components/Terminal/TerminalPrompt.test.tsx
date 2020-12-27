import { render, screen } from "@testing-library/react";

import { MemoryRouter } from "react-router-dom";
import React from "react";
import { TerminalPrompt } from "./TerminalPrompt";

beforeEach(() => {
  render(<TerminalPrompt command="Test" />, { wrapper: MemoryRouter });
});

test("Spaces are rendered between prompt markers", () => {
  screen.getAllByText((_, node) => {
    return node?.textContent?.includes("> $ ");
  });
});

test("Command text is rendered", () => {
  screen.getByText(/Test/);
});
