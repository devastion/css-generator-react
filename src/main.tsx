import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import { Core } from "components/Core";
import { Navigation } from "components/Navigation";
import { ErrorPage } from "components/ErrorPage";
import { BorderRadius, BoxShadow, TextShadow, RGBA, FontFace, MultipleColumns, BoxResize, BoxSizing, Outline, Transition, Transform } from "./pages/";

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
  {
    path: "/box-shadow",
    element: (
      <Core>
        <Navigation />
        <BoxShadow />
      </Core>
    ),
  },
  {
    path: "/text-shadow",
    element: (
      <Core>
        <Navigation />
        <TextShadow />
      </Core>
    ),
  },
  {
    path: "/rgba",
    element: (
      <Core>
        <Navigation />
        <RGBA />
      </Core>
    ),
  },
  {
    path: "/font-face",
    element: (
      <Core>
        <Navigation />
        <FontFace />
      </Core>
    ),
  },
  {
    path: "/multiple-columns",
    element: (
      <Core>
        <Navigation />
        <MultipleColumns />
      </Core>
    ),
  },
  {
    path: "/box-resize",
    element: (
      <Core>
        <Navigation />
        <BoxResize />
      </Core>
    ),
  },
  {
    path: "/box-sizing",
    element: (
      <Core>
        <Navigation />
        <BoxSizing />
      </Core>
    ),
  },
  {
    path: "/outline",
    element: (
      <Core>
        <Navigation />
        <Outline />
      </Core>
    ),
  },
  {
    path: "/transition",
    element: (
      <Core>
        <Navigation />
        <Transition />
      </Core>
    ),
  },
  {
    path: "/transform",
    element: (
      <Core>
        <Navigation />
        <Transform />
      </Core>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
