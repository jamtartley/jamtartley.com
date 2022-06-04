import { render, screen } from "@testing-library/react";

import React from "react";
import { Terminal } from "./Terminal";

describe("[Terminal]", () => {
	const childText = "CHILD TEXT";
	const header = "TERMINAL HEADER";

	beforeEach(() => {
		render(<Terminal header={header}>{childText}</Terminal>);
	});

	it("displays given header", () => {
		screen.getByText(header);
	});

	it("renders children", () => {
		screen.getByText(childText);
	});
});
