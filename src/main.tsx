import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import { Core } from "components/Core";
import { Navigation } from "components/Navigation";
import { ErrorPage } from "components/ErrorPage";
import { BorderRadius, BoxShadow, TextShadow, RGBA, FontFace, MultipleColumns, BoxResize, BoxSizing, Outline, Transition, Transform } from "./pages/";

const routerProd = createBrowserRouter([
  {
    path: "/css-generator-react/",
    element: (
      <Core>
        <Navigation />
      </Core>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "/css-generator-react/border-radius",
    element: (
      <Core>
        <Navigation />
        <BorderRadius />
      </Core>
    ),
  },
  {
    path: "/css-generator-react/box-shadow",
    element: (
      <Core>
        <Navigation />
        <BoxShadow />
      </Core>
    ),
  },
  {
    path: "/css-generator-react/text-shadow",
    element: (
      <Core>
        <Navigation />
        <TextShadow />
      </Core>
    ),
  },
  {
    path: "/css-generator-react/rgba",
    element: (
      <Core>
        <Navigation />
        <RGBA />
      </Core>
    ),
  },
  {
    path: "/css-generator-react/font-face",
    element: (
      <Core>
        <Navigation />
        <FontFace />
      </Core>
    ),
  },
  {
    path: "/css-generator-react/multiple-columns",
    element: (
      <Core>
        <Navigation />
        <MultipleColumns />
      </Core>
    ),
  },
  {
    path: "/css-generator-react/box-resize",
    element: (
      <Core>
        <Navigation />
        <BoxResize />
      </Core>
    ),
  },
  {
    path: "/css-generator-react/box-sizing",
    element: (
      <Core>
        <Navigation />
        <BoxSizing />
      </Core>
    ),
  },
  {
    path: "/css-generator-react/outline",
    element: (
      <Core>
        <Navigation />
        <Outline />
      </Core>
    ),
  },
  {
    path: "/css-generator-react/transition",
    element: (
      <Core>
        <Navigation />
        <Transition />
      </Core>
    ),
  },
  {
    path: "/css-generator-react/transform",
    element: (
      <Core>
        <Navigation />
        <Transform />
      </Core>
    ),
  },
]);

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
    <RouterProvider router={import.meta.env.MODE === "production" ? routerProd : router} />
  </React.StrictMode>
);
