import { lazy, Suspense } from "react";

import Loader from "@/components/Loader";

const Elements = lazy(() => import("../components/Elements"));

const LeftSide = () => {
  return (
    <div className="border-r-[1px] border-black dark:border-slate-500">
      <Suspense fallback={<Loader containerClassName="h-full" />}>
        <Elements />
      </Suspense>
    </div>
  );
};

export default LeftSide;
