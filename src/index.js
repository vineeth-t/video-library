import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import {
  AuthProvider,
  ThemeContextProvider,
  StateContextProvider
} from "./contexts/index";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <AuthProvider>
        <StateContextProvider>
          <ThemeContextProvider>
              <App />
          </ThemeContextProvider>
        </StateContextProvider>
      </AuthProvider>
	</Router>
  </React.StrictMode>,
  document.getElementById("root")
);
