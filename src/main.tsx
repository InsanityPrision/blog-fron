import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import { store } from "./post/store";
import router from "./router";
import "@fontsource/geist-sans/index.css";
import "./styles/styles.css";

createRoot(document.querySelector(".root")!).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
);
