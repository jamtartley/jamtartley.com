import React, { FC } from "react";
import colours, { accentColours } from "../../colours";

import { getRandomElement } from "../../utils";
import sizes from "../../sizes";
import styled from "styled-components";

interface IWrapperProps {
	borderColour: string;
	shadowColour: string;
}

const Wrapper = styled.div<IWrapperProps>`
	background: ${colours.TERMINAL_BACKGROUND};
	color: ${colours.FOREGROUND};
	border: 4px solid ${props => props.borderColour};
	font-size: 16px;
	font-family: "Inconsolata", monospace;
	box-shadow: -8px 8px 0 0 ${props => props.shadowColour};
	margin: 20px;
	flex: 1;
`;

const ChildWrapper = styled.div`
	padding: 10px;
`;

const HeaderWrapper = styled.div<{ backgroundColour: string }>`
	background: ${props => props.backgroundColour};
	padding: 20px;
	font-style: italic;
	font-size: 30px;
	font-weight: 900;
	color: ${colours.TERMINAL_BACKGROUND};

	@media (max-width: ${sizes.TABLET}) {
		font-size: 25px;
	}
`;

interface IHeaderProps {
	backgroundColour: string;
	header: string;
}

const Header: FC<IHeaderProps> = ({ backgroundColour, header }) => {
	return <HeaderWrapper backgroundColour={backgroundColour}>{header}</HeaderWrapper>;
};

export type TerminalProps = React.PropsWithChildren<{
	header: string;
}>;

export function Terminal({ header, children }: TerminalProps) {
	const alphaChannel = "44";
	const borderColour = getRandomElement(Object.values(accentColours));
	const shadowColour = `${borderColour}${alphaChannel}`;

	return (
		<Wrapper borderColour={borderColour} shadowColour={shadowColour}>
			<Header backgroundColour={borderColour} header={header} />
			<ChildWrapper>{children}</ChildWrapper>
		</Wrapper>
	);
}
