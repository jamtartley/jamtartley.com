import React, { FC } from "react";

import colours from "../../colours";
import styled from "styled-components";

const Wrapper = styled.div`
  overflow: auto;
  background: ${colours.BACKGROUND_LIGHT};
  color: ${colours.FOREGROUND};
  border: 2px solid ${colours.CYAN};
  font-size: 20px;
  font-family: monospace;
  box-shadow: -2px 2px 2px 0 ${colours.CYAN}88;
  margin: 20px;
  padding: 8px;
  flex: 1;
`;

export const Terminal: FC = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};
