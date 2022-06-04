import { MemoryRouter, unstable_HistoryRouter as HistoryRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";

import { TerminalPrompt } from "./TerminalPrompt";
import { createBrowserHistory } from "history";
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
			const history = createBrowserHistory({ window });
			history.push(invalidRoute);

			render(
				<HistoryRouter history={history}>
					<TerminalPrompt command="Test" />
				</HistoryRouter>
			);
		});

		it("renders other URL as nested directory", async () => {
			screen.getByText(`~${invalidRoute}`);
		});
	});
});
