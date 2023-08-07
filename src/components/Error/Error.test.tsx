import React, { render, screen } from "@testing-library/react";

import { Error } from "./Error";
import { unstable_HistoryRouter as HistoryRouter } from "react-router-dom";
import { createBrowserHistory } from "history";

describe("[TerminalPrompt]", () => {
	const invalidRoute = "/invalid";

	beforeEach(() => {
		const history = createBrowserHistory({ window });
		history.push(invalidRoute);

		render(
			<HistoryRouter history={history}>
				<Error />
			</HistoryRouter>
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
