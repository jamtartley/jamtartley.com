import React, { FC } from "react";

import colours from "../../colours";
import styled from "styled-components";

const OutputItemWrapper = styled.div`
  color: ${colours.FOREGROUND};
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
  shouldOpenNewWindow?: boolean;
}

const LinkOutputWrapper = styled.a`
  color: ${colours.PINK};
`;

export const LinkOutputItem: FC<ILinkOutputItemProps> = ({ text, link = text, shouldOpenNewWindow }) => {
  return (
    <OutputItemWrapper>
      <LinkOutputWrapper href={link} target={`${shouldOpenNewWindow ? "_blank" : ""}`}>
        {text}
      </LinkOutputWrapper>
    </OutputItemWrapper>
  );
};

const ImageOutputWrapper = styled.img`
  height: 500px;
  width: auto;
`;

interface IImageOutputItemProps {
  imageLocation: string;
}

export const ImageOutputItem: FC<IImageOutputItemProps> = ({ imageLocation }) => {
  return <ImageOutputWrapper src={imageLocation} />;
};
