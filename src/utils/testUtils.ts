import { screen } from "@testing-library/react";

export const findInTextContent = (text: string) => {
  screen.getAllByText((_, node) => {
    return node?.textContent?.includes(text);
  });
};
