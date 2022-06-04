import { Misc, MiscItems } from "./Misc";
import { render, screen } from "@testing-library/react";

import { MemoryRouter } from "react-router-dom";
import React from "react";

describe("[Misc]", () => {
	beforeEach(() => {
		render(<Misc />, { wrapper: MemoryRouter });
	});

	it("displays items for every miscellaneous project", () => {
		for (const item of MiscItems) {
			expect(screen.getByText(item.title)).toBeInTheDocument();
		}
	});
});
