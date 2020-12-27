import { render, screen } from "@testing-library/react";

import { PersonalInfo } from "./PersonalInfo";
import React from "react";

test("Name is capitalised correctly", () => {
  render(<PersonalInfo />);
  expect(screen.getByText(/Sam Hartley/)).toBeInTheDocument();
});
