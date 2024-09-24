import { StrictMode, Suspense, lazy } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "@fontsource-variable/quicksand";

import { ROUTES } from "./constants/index.ts";

// import Start from "./pages/Start.tsx";

import Loader from "./components/Loader.tsx";

const Start = lazy(() => import("./pages/Start.tsx"));

import "./styles/global.css";

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
        <>asd</>
      </Suspense>
    ),
    path: ROUTES.CONSTRUCTOR,
  },
  {
    path: "*",
    element: <div>Not found</div>,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
