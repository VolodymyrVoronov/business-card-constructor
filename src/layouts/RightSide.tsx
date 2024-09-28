import { lazy, Suspense } from "react";

import Loader from "@/components/Loader";

const Dimension = lazy(() => import("../components/Dimension"));

const RightSide = () => {
  return (
    <div className="h-auto overflow-auto border-l-[1px] border-black dark:border-slate-500">
      <Suspense fallback={<Loader containerClassName="h-full" />}>
        <Dimension />
      </Suspense>
    </div>
  );
};

export default RightSide;
