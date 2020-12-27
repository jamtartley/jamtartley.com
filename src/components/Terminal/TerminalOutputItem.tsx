import React, { FC } from "react";

import colours from "../../colours";
import styled from "styled-components";

const OutputItemWrapper = styled.div`
  color: ${colours.FOREGROUND};
  padding-left: 10px;
`;

interface ITextOutputItemProps {
  text: string;
}

export const TextOutputItem: FC<ITextOutputItemProps> = ({ text }) => {
  return <OutputItemWrapper>{text}</OutputItemWrapper>;
};

interface ILinkOutputItemProps {
  text: string;
  link?: string;
}

const LinkOutputWrapper = styled.a`
  color: ${colours.PINK};
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export const LinkOutputItem: FC<ILinkOutputItemProps> = ({ text, link = text }) => {
  return (
    <OutputItemWrapper>
      <LinkOutputWrapper href={link}>{text}</LinkOutputWrapper>
    </OutputItemWrapper>
  );
};
