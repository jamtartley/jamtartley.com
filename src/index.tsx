import "./index.css";

import React, { FC } from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import { ErrorPage } from "./pages/ErrorPage/ErrorPage";
import { HomePage } from "./pages/HomePage/HomePage";
import ReactDOM from "react-dom";
import colours from "./colours";
import reportWebVitals from "./reportWebVitals";
import styled from "styled-components";

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  background: ${colours.BACKGROUND};
`;

const App: FC = () => {
  return (
    <Router>
      <Switch>
        <Wrapper>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="*">
            <ErrorPage />
          </Route>
        </Wrapper>
      </Switch>
    </Router>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root"),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
