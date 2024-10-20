import { Fragment } from "react/jsx-runtime";
import { useShallow } from "zustand/react/shallow";

import { BACKGROUNDS } from "@/constants";
import { cn } from "@/lib/utils";
import { useAppStore } from "@/store/app";

const BackgroundColors = () => {
  const [canvasBackgroundColor, setCanvasBackgroundColor] = useAppStore(
    useShallow((state) => [
      state.canvasBackgroundColor,
      state.setCanvasBackgroundColor,
    ]),
  );

  const onBackgroundButtonClick = (background: string): void => {
    setCanvasBackgroundColor(background);
  };

  return (
    <Fragment>
      <span className="text-center text-sm font-semibold">Backgrounds</span>

      <div className="flex flex-row flex-wrap gap-2 py-1">
        {BACKGROUNDS.map((background) => (
          <button
            key={background}
            className={cn(
              "h-8 w-8 rounded border-[1px] border-black opacity-50 transition-all hover:scale-110 hover:opacity-100 dark:border-slate-500",
              canvasBackgroundColor === background && "scale-105 opacity-100",
            )}
            style={{ background: background }}
            onClick={() => onBackgroundButtonClick(background)}
          />
        ))}
      </div>
    </Fragment>
  );
};

export default BackgroundColors;
