import React, { FC } from "react";

import colours from "../../colours";
import styled from "styled-components";

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
	return (
		<Wrapper>
			<PromptLocation>~ </PromptLocation>
			<PromptArrow>&gt; </PromptArrow>
			<PromptMarker>$ </PromptMarker>
			{command}
		</Wrapper>
	);
};
