import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ThemeProvider } from "@emotion/react";
import { ToastProvider } from "@nba-design/ui";
import { theme } from "@nba-design/ui";
import { GlobalStyles } from "./styles/global";

const rootElement = document.getElementById("root")!;
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <ToastProvider>
        <GlobalStyles />
        <App />
      </ToastProvider>
    </ThemeProvider>
  </React.StrictMode>,
);
