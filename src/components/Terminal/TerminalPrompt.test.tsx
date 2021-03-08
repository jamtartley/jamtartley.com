import { MemoryRouter, Router } from "react-router-dom";
import { render, screen } from "@testing-library/react";

import React from "react";
import { TerminalPrompt } from "./TerminalPrompt";
import { createMemoryHistory } from "history";
import { findInTextContent } from "../../utils/testUtils";

describe("[TerminalPrompt]", () => {
  describe("[homepage]", () => {
    beforeEach(() => {
      render(<TerminalPrompt command="Test" />, { wrapper: MemoryRouter });
    });

    it("renders prompt marker", () => {
      findInTextContent("> $");
    });

    it("renders given command text", () => {
      screen.getByText(/Test/);
    });

    it("renders root URL as home directory", () => {
      screen.getByText("~");
    });
  });

  describe("[invalid page]", () => {
    const invalidRoute = "/invalid";

    beforeEach(() => {
      const history = createMemoryHistory();
      history.push(invalidRoute);

      render(
        <Router history={history}>
          <TerminalPrompt command="Test" />
        </Router>,
      );
    });

    it("renders other URL as nested directory", async () => {
      screen.getByText(`~${invalidRoute}`);
    });
  });
});
