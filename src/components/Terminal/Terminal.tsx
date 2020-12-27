import React, { FC } from "react";
import colours, { accentColours } from "../../colours";

import { getRandomElement } from "../../utils";
import styled from "styled-components";

const borderColour = getRandomElement(Object.values(accentColours));
const shadowColour = `${borderColour}55`;

const Wrapper = styled.div`
  overflow: auto;
  background: ${colours.BACKGROUND_LIGHT};
  color: ${colours.FOREGROUND};
  border: 2px solid ${borderColour};
  font-size: 20px;
  font-family: monospace;
  box-shadow: -4px 4px 1px 0 ${shadowColour};
  margin: 20px;
  padding: 8px;
  flex: 1;
`;

export const Terminal: FC = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};
