import React, { FC } from "react";

import { Error } from "../../components/Error/Error";
import { Terminal } from "../../components/Terminal/Terminal";
import styled from "styled-components";

const Wrapper = styled.div`
	display: flex;
	flex: 1;
	height: 100vh;
`;

export const ErrorPage: FC = () => {
	return (
		<Wrapper>
			<Terminal header="404_not_found">
				<Error />
			</Terminal>
		</Wrapper>
	);
};
