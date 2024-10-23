import { useShallow } from "zustand/react/shallow";

import { useAppStore } from "@/store/app";

import { Slider } from "@/components/ui/slider";

const BackgroundOpacity = () => {
  const [
    canvasBackgroundColor,
    canvasBackgroundColorOpacity,
    setCanvasBackgroundColorOpacity,
  ] = useAppStore(
    useShallow((state) => [
      state.canvasBackgroundColor,
      state.canvasBackgroundColorOpacity,
      state.setCanvasBackgroundColorOpacity,
    ]),
  );

  const onSliderChange = (value: number[]): void => {
    setCanvasBackgroundColorOpacity(value[0]);
  };

  if (!canvasBackgroundColor) {
    return null;
  }

  return (
    <div className="flex flex-col gap-1">
      <label
        htmlFor="bg-color-opacity"
        className="col-start-1 col-end-3 text-xs"
      >
        Background Color Opacity (0% - 100%)
      </label>

      <div className="flex flex-row gap-2">
        <Slider
          onValueChange={onSliderChange}
          value={[canvasBackgroundColorOpacity]}
          defaultValue={[100]}
          max={100}
          step={1}
          className="w-full"
        />

        <span className="font-semibold">{canvasBackgroundColorOpacity}</span>
      </div>
    </div>
  );
};

export default BackgroundOpacity;
