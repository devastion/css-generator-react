import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import { Core } from "components/Core";
import { Navigation } from "components/Navigation";
import { ErrorPage } from "components/ErrorPage";
import { BorderRadius } from "./pages/BorderRadius/BorderRadius";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Core>
        <Navigation />
      </Core>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "/border-radius",
    element: (
      <Core>
        <Navigation />
        <BorderRadius />
      </Core>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
