import { render, screen } from "@testing-library/react";

import React from "react";
import { UnderConstruction } from "./UnderConstruction";

test("Under construction text renders", () => {
  render(<UnderConstruction />);
  expect(screen.getByText(/Under construction/)).toBeInTheDocument();
});
