import { render, screen } from "@testing-library/react";

import { Error } from "./Error";
import React from "react";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";

describe("[TerminalPrompt]", () => {
  const invalidRoute = "/invalid";

  beforeEach(() => {
    const history = createMemoryHistory();
    history.push(invalidRoute);

    render(
      <Router history={history}>
        <Error />
      </Router>,
    );
  });

  it("renders goto command", async () => {
    screen.getByText(`goto ${invalidRoute}`);
  });

  it("renders help_me command", () => {
    screen.getByText("help_me");
  });

  it("renders homepage link", () => {
    const linkRegex = /click here/i;
    screen.getByText(linkRegex);
    expect(screen.getByText(linkRegex).closest("a")).toHaveAttribute("href", "/");
  });
});
