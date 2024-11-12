import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./components/App/App.tsx";
import "@fontsource/geist-sans/index.css";
import "./styles/styles.css";

createRoot(document.querySelector(".root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
