import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import StoreProvider from "redux/index";

import App from "./components/App";

ReactDOM.render(
  <StoreProvider>
    <BrowserRouter>
      <Route path="/" component={App} />
    </BrowserRouter>
  </StoreProvider>,
  document.getElementById("root")
);
