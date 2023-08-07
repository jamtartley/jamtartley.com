import { MemoryRouter } from "react-router-dom";
import React, { render, screen } from "@testing-library/react";

import { TerminalPrompt } from "./TerminalPrompt";
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
});
