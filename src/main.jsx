import React from "react";
import ReactDOM from "react-dom/client";
import { ErrorBoundary } from "react-error-boundary";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import "./index.css";
import App from "./App";
import Fallback from "./component/Fallback";



ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
    <BrowserRouter>
      <ErrorBoundary fallback={<Fallback />}>
        <App />
      </ErrorBoundary>
    </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>
);
