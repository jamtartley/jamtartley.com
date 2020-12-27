import React, { FC } from "react";

import colours from "../colours";
import styled from "styled-components";

export const Terminal: FC = ({ children }) => {
  const Wrapper = styled.div`
    overflow: auto;
    background: ${colours.BACKGROUND_LIGHT};
    color: ${colours.FOREGROUND};
    border: 2px solid ${colours.CYAN};
    font-size: 14px;
    font-family: monospace;
    box-shadow: -4px 4px 2px 0 ${colours.PINK};
    white-space: pre-wrap;
    outline: 0;
    margin: 8px;
    padding: 8px;
    flex: 1;
  `;

  return <Wrapper>{children}</Wrapper>;
};
