import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@fontsource/geist-sans/index.css";
import "./styles/styles.css";
import { RouterProvider } from "react-router-dom";
import router from "./router";

createRoot(document.querySelector(".root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
