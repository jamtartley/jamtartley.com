import { render, screen } from "@testing-library/react";

import { MemoryRouter } from "react-router-dom";
import { PersonalInfo } from "./PersonalInfo";
import React from "react";

beforeEach(() => {
  render(<PersonalInfo />, { wrapper: MemoryRouter });
});

test("Name is capitalised correctly", () => {
  expect(screen.getByText(/Sam Hartley/)).toBeInTheDocument();
});

test("City renders correctly", () => {
  expect(screen.getByText(/Wimbledon/)).toBeInTheDocument();
  expect(screen.getByText(/London/)).toBeInTheDocument();
});

test("Email link works correctly", () => {
  const email = "sam@jamtartley.com";
  expect(screen.getByText(email).closest("a")).toHaveAttribute("href", `mailto:${email}`);
});
