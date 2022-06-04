import { TerminalPromptProps, TerminalPrompt } from "./TerminalPrompt";
import React from "react";

import styled from "styled-components";

const Wrapper = styled.div`
	max-height: 100%;
	margin-bottom: 30px;
`;

export function TerminalItem({ command, children }: TerminalPromptProps) {
	return (
		<Wrapper>
			<TerminalPrompt command={command} />
			{children}
		</Wrapper>
	);
}
