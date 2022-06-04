import { WebItem, IWebItem } from "./Web";
import { render, screen } from "@testing-library/react";

import { MemoryRouter } from "react-router-dom";
import React from "react";
import { findInTextContent } from "../../utils/testUtils";

describe("[WebItem]", () => {
	const item: IWebItem = {
		title: "jamtartley.com",
		description: "Personal webpage",
		tech: "TS/React",
		links: {
			live: "https://jamtartley.com",
			source: "https://gitlab.com/jamtartley/jamtartley-com",
		},
	};

	beforeEach(() => {
		render(<WebItem item={item} />, { wrapper: MemoryRouter });
	});

	it("renders project name", () => {
		screen.getByText(item.title);
	});

	it("renders project description", () => {
		findInTextContent(item.description);
	});

	it("renders project tech", () => {
		findInTextContent(item.tech);
	});

	it("populates live deployment link", () => {
		expect(screen.getByText(/link/i).closest("a")).toHaveAttribute("href", item.links.live);
	});

	it("populates source code link", () => {
		expect(screen.getByText(/source/i).closest("a")).toHaveAttribute("href", item.links.source);
	});
});
