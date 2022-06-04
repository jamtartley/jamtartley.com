import { LinkOutputItem, TextOutputItem } from "../Terminal/TerminalOutputItem";
import React, { FC } from "react";

import { TerminalItem } from "../Terminal/TerminalItem";
import { useLocation } from "react-router-dom";

export const Error: FC = () => {
	const location = useLocation();

	return (
		<>
			<TerminalItem command={`goto ${location.pathname}`}>
				<TextOutputItem text={`command not found: ${location.pathname.substr(1)}`} />
			</TerminalItem>
			<TerminalItem command="help_me">
				<LinkOutputItem text="Click here to go home" link="/" />
			</TerminalItem>
		</>
	);
};
