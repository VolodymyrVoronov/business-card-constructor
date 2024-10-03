import { lazy, Suspense } from "react";

import Loader from "@/components/Loader";

const LeftSide = lazy(() => import("@/layouts/LeftSide"));
const RightSide = lazy(() => import("@/layouts/RightSide"));
const Header = lazy(() => import("@/components/Header"));
const Constructor = lazy(() => import("@/components/Constructor"));

const Main = () => {
  return (
    <>
      <Suspense fallback={<Loader containerClassName="h-full" />}>
        <Header />

        <div className="grid h-[calc(100%-53px)] grid-cols-[300px_minmax(500px,1fr)_300px]">
          <LeftSide />
          <Constructor />
          <RightSide />
        </div>
      </Suspense>
    </>
  );
};

export default Main;
