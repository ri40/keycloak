import "./App.css";
import "./core/configs/i18n";

import React from "react";
import { createRoot } from "react-dom/client";

import { AppRouting } from "./app-routes";
import reportWebVitals from "./reportWebVitals";

const container = document.getElementById("root") as HTMLElement;
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<React.StrictMode>{AppRouting()}</React.StrictMode>);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
