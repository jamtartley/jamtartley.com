import React, { FC } from "react";

import { Error } from "../../components/Error/Error";
import { Terminal } from "../../components/Terminal/Terminal";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  height: 100%;
`;

export const ErrorPage: FC = () => {
  return (
    <Wrapper>
      <Terminal>
        <Error />
      </Terminal>
    </Wrapper>
  );
};
