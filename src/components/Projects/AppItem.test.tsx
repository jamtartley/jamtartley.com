import { AppItem, AppItems } from "./Apps";
import { render, screen } from "@testing-library/react";

import { MemoryRouter } from "react-router-dom";
import React from "react";
import { findInTextContent } from "../../utils/testUtils";

describe("[AppItem]", () => {
	const appItem = AppItems[0];

	beforeEach(() => {
		render(<AppItem app={appItem} />, { wrapper: MemoryRouter });
	});

	it("renders app name", () => {
		screen.getByText(appItem.title);
	});

	it("renders app description", () => {
		findInTextContent(appItem.description);
	});

	it("populates app store links", () => {
		const { ios, android } = appItem.links;
		expect(screen.getByText("iOS").closest("a")).toHaveAttribute("href", ios);
		expect(screen.getByText("Android").closest("a")).toHaveAttribute("href", android);
	});
});
