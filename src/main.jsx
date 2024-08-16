import React from "react";
import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";


ReactDOM.createRoot(document.getElementById("server")).render(
  <StrictMode>
    <App />
  </StrictMode>
)