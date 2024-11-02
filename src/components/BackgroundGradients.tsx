import { Fragment } from "react/jsx-runtime";
import { useShallow } from "zustand/react/shallow";

import { GRADIENTS } from "@/constants";
import { cn } from "@/lib/utils";
import { useAppStore } from "@/store/app";

import { ScrollArea } from "./ui/scroll-area";

const BackgroundGradients = () => {
  const [canvasGradient, setCanvasGradient] = useAppStore(
    useShallow((state) => [state.canvasGradient, state.setCanvasGradient]),
  );

  const onGradientButtonClick = (gradient: [string, string]): void => {
    setCanvasGradient(gradient);
  };

  return (
    <Fragment>
      <span className="text-center text-sm font-semibold">Gradients</span>

      <ScrollArea className="h-[120px] w-auto" type="auto">
        <div className="flex flex-row flex-wrap gap-2 py-1">
          {GRADIENTS.map((gradient) => (
            <button
              key={`gradient-${gradient}`}
              className={cn(
                "h-8 w-8 rounded border-[1px] border-black opacity-50 transition-all hover:scale-110 hover:opacity-100 dark:border-slate-500",
                canvasGradient?.toString() === gradient.toString() &&
                  "scale-105 opacity-100",
              )}
              style={{ background: `linear-gradient(to right, ${gradient})` }}
              onClick={() =>
                onGradientButtonClick(gradient as [string, string])
              }
            />
          ))}
        </div>
      </ScrollArea>
    </Fragment>
  );
};

export default BackgroundGradients;
