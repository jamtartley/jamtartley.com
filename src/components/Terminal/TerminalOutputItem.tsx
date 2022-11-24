import React, { FC } from "react";

import colours from "../../colours";
import styled from "styled-components";

const OutputItemWrapper = styled.div`
	color: ${colours.FOREGROUND};
	display: inline;
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

export const LinkOutputWrapper = styled.a`
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
	width: 100%;
	height: auto;
	margin: 10px 0;
`;

interface IImageOutputItemProps {
	imageLocation: string;
}

export const ImageOutputItem: FC<IImageOutputItemProps> = ({ imageLocation }) => {
	return <ImageOutputWrapper src={imageLocation} />;
};
