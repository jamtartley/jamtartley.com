import "./index.css";

import React, { FC } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { createRoot } from "react-dom/client";

import { ErrorPage } from "./pages/ErrorPage/ErrorPage";
import { HomePage } from "./pages/HomePage/HomePage";
import colours from "./colours";
import reportWebVitals from "./reportWebVitals";
import styled from "styled-components";

const Wrapper = styled.div`
	display: flex;
	min-height: 100vh;
	background: ${colours.BACKGROUND};
`;

const App: FC = () => {
	return (
		<Wrapper>
			<Router>
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="*" element={<ErrorPage />} />
				</Routes>
			</Router>
		</Wrapper>
	);
};

const root = createRoot(document.getElementById("root")!);
root.render(<App />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
