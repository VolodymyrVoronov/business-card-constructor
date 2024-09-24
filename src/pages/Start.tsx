import { Link } from "react-router-dom";

import { BackgroundBeamsWithCollision } from "@/components/BackgroundBeamsWithCollision";
import { Button } from "@/components/ui/button";
import { ROUTES } from "@/constants";

const Start = () => {
  return (
    <BackgroundBeamsWithCollision>
      <div className="z-10 flex h-screen w-full flex-col items-center justify-center">
        <div className="grid grid-cols-1 gap-10 md:p-10 lg:grid-cols-[auto_1fr] lg:p-2">
          <div className="flex min-h-[250px] w-[450px] flex-col gap-y-4 rounded-sm border-2 border-purple-700 p-5">
            <div className="grid grid-cols-[auto_1fr] gap-2">
              <div className="block size-24 rounded-sm bg-slate-200"></div>
              <div className="flex flex-col gap-y-2">
                <div className="block h-[14px] w-[50%] rounded-sm bg-slate-200"></div>
                <div className="block h-[14px] w-[60%] rounded-sm bg-slate-200"></div>
                <div className="block h-[14px] w-[60%] rounded-sm bg-slate-200"></div>
              </div>
            </div>

            <div className="flex flex-col gap-y-2">
              <div className="block h-[24px] w-[70%] rounded-sm bg-purple-200"></div>
              <div className="block h-[24px] w-[80%] rounded-sm bg-purple-200"></div>
              <div className="block h-[24px] w-[100%] rounded-sm bg-purple-400"></div>
              <div className="flex flex-row gap-x-2">
                <div className="block h-[24px] w-[80%] rounded-sm bg-purple-400"></div>
                <div className="block h-[24px] w-[10%] animate-pulse rounded-sm bg-purple-400"></div>
                <div className="block h-[24px] w-[10%] animate-pulse rounded-sm bg-purple-400"></div>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-start justify-center gap-y-3">
            <h1 className="text-3xl font-bold">Business Card Constructor</h1>
            <p className="text-lg">
              Create your own business card with our easy-to-use interface.
            </p>
            <Button size="lg" asChild>
              <Link to={ROUTES.CONSTRUCTOR}>Start creating</Link>
            </Button>
          </div>
        </div>
      </div>
    </BackgroundBeamsWithCollision>
  );
};

export default Start;
