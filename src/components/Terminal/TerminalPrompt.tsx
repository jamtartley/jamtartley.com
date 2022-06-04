import React, { FC } from "react";

import colours from "../../colours";
import styled from "styled-components";
import { useLocation } from "react-router-dom";

export type TerminalPromptProps = React.PropsWithChildren<{
	command: string;
}>;

const Wrapper = styled.div`
	margin-bottom: 2px;
`;

const PromptLocation = styled.span`
	color: ${colours.CYAN};
`;
const PromptArrow = styled.span`
	color: ${colours.CYAN};
`;
const PromptMarker = styled.span`
	color: ${colours.GREEN};
`;

export const TerminalPrompt: FC<TerminalPromptProps> = ({ command }) => {
	const location = useLocation();
	const afterSlash = location.pathname.substr(1, location.pathname.length - 1);
	const routeToDisplay = `~${afterSlash && `/${afterSlash}`}`;

	return (
		<Wrapper>
			<PromptLocation>{routeToDisplay} </PromptLocation>
			<PromptArrow>&gt; </PromptArrow>
			<PromptMarker>$ </PromptMarker>
			{command}
		</Wrapper>
	);
};
