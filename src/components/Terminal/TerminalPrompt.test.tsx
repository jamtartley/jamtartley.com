import { render, screen } from "@testing-library/react";

import React from "react";
import { TerminalPrompt } from "./TerminalPrompt";

test("Spaces are rendered between prompt markers", () => {
  render(<TerminalPrompt command="Test" />);
  screen.getAllByText((_, node) => {
    return node?.textContent?.includes("> $ ");
  });
});

test("Command text is rendered", () => {
  render(<TerminalPrompt command="Test" />);
  screen.getByText(/Test/);
});
