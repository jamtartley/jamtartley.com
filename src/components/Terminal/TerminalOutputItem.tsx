import React, { FC } from "react";

import colours from "../../colours";
import styled from "styled-components";

interface ILinkOutputItemProps {
  text: string;
  link?: string;
}

const LinkOutputWrapper = styled.a`
  color: ${colours.FOREGROUND};

  &:hover {
    color: ${colours.PINK};
  }
`;

export const LinkOutputItem: FC<ILinkOutputItemProps> = ({ text, link = text }) => {
  return <LinkOutputWrapper href={link}>{text}</LinkOutputWrapper>;
};

const TextOutputItemWrapper = styled.p`
  color: ${colours.FOREGROUND};
  padding-left: 8px;
  line-height: 50%;
`;

interface ITextOutputItemProps {
  text: string;
}

export const TextOutputItem: FC<ITextOutputItemProps> = ({ text }) => {
  return <TextOutputItemWrapper>{text}</TextOutputItemWrapper>;
};
