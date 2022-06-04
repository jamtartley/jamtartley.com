import { render, screen } from "@testing-library/react";

import { Bio } from "./Bio";
import { MemoryRouter } from "react-router-dom";
import React from "react";

describe("[Bio]", () => {
	beforeEach(() => {
		render(<Bio />, { wrapper: MemoryRouter });
	});

	it("capitalises the name correctly", () => {
		expect(screen.getByText(/Sam Hartley/)).toBeInTheDocument();
	});

	it("renders the city correctly", () => {
		expect(screen.getByText(/London/)).toBeInTheDocument();
	});

	it("correctly links to the email", () => {
		const email = "sam@jamtartley.com";
		expect(screen.getByText(email).closest("a")).toHaveAttribute("href", `mailto:${email}`);
	});
});
