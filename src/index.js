import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import "./i18n";
import App from "./App";

ReactDOM.render(
  <Suspense fallback="Loading">
    <App />
  </Suspense>,
  document.getElementById("root")
);
