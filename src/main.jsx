import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

import * as Sentry from "@sentry/react";

Sentry.init({
  dsn: "https://e676dca59350a3839923ff1bec54449f@o4508853276901376.ingest.us.sentry.io/4508853279981568",
  integrations: [],
});

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
