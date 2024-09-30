import "@fontsource-variable/quicksand";

import { lazy, StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { ROUTES } from "./constants/index.ts";

import Loader from "./components/Loader.tsx";
import { Toaster } from "./components/ui/toaster.tsx";

const Start = lazy(() => import("./pages/Start.tsx"));
const Constructor = lazy(() => import("./pages/Main.tsx"));

import "./styles/global.css";
import App from "./App.tsx";

const router = createBrowserRouter([
  {
    element: (
      <Suspense fallback={<Loader />}>
        <Start />
      </Suspense>
    ),
    path: ROUTES.START,
  },
  {
    element: (
      <Suspense fallback={<Loader />}>
        <Constructor />
      </Suspense>
    ),
    path: ROUTES.MAIN,
  },
  {
    path: "*",
    element: <div>Not found</div>,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
    <Toaster />
  </StrictMode>,
);
