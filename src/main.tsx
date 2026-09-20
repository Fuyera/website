import { StrictMode } from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { resolvePath } from "./content";
import { localeFromPath } from "./i18n";
const root = document.getElementById("root")!;
const app = (
  <StrictMode>
    <App path={resolvePath(window.location.pathname)} locale={localeFromPath(window.location.pathname)} />
  </StrictMode>
);
if (root.querySelector("main")) hydrateRoot(root, app);
else createRoot(root).render(app);
