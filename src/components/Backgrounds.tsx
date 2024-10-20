import { Trash2Icon } from "lucide-react";
import { ChangeEvent, useRef } from "react";
import { useShallow } from "zustand/react/shallow";

import { BACKGROUNDS, GRADIENTS } from "@/constants";
import convertToBase64 from "@/helpers/convertToBase64";
import { cn } from "@/lib/utils";
import { useAppStore } from "@/store/app";

import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Separator } from "./ui/separator";
import { Hint } from "./Hint";
import { ScrollArea } from "./ui/scroll-area";

const Backgrounds = () => {
  const [
    canvasBackgroundColor,
    canvasGradient,
    setCanvasBackgroundColor,
    setCanvasGradient,
    setCanvasBackgroundImage,
    clearCanvasBackground,
  ] = useAppStore(
    useShallow((state) => [
      state.canvasBackgroundColor,
      state.canvasGradient,
      state.setCanvasBackgroundColor,
      state.setCanvasGradient,
      state.setCanvasBackgroundImage,
      state.clearCanvasBackground,
    ]),
  );

  const uploadImageRef = useRef<HTMLInputElement>(null);

  const onBackgroundButtonClick = (background: string): void => {
    setCanvasBackgroundColor(background);
  };

  const onGradientButtonClick = (gradient: [string, string]): void => {
    setCanvasGradient(gradient);
  };

  const onColorInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const color = e.target.value;

    setCanvasBackgroundColor(color);
  };

  const onImageInputChange = async (
    e: ChangeEvent<HTMLInputElement>,
  ): Promise<void> => {
    const file = e.target?.files?.[0];

    if (file) {
      const base64 = (await convertToBase64(file)) as string;

      if (base64) {
        setCanvasBackgroundImage(base64);

        if (uploadImageRef.current) {
          uploadImageRef.current.value = "";
        }
      }
    }
  };

  return (
    <div className="flex flex-col gap-y-2 border-b-[1px] border-black p-2 dark:border-slate-500">
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

      <span className="text-center text-sm font-semibold">Gradients</span>

      <ScrollArea className="h-[125px] w-auto">
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

      <Separator
        orientation="horizontal"
        className="bg-black dark:bg-slate-500"
      />

      <div className="grid grid-cols-5 grid-rows-[auto_1fr] gap-x-4 gap-y-1">
        <label htmlFor="bg-color" className="col-start-1 col-end-3 text-xs">
          Background Color
        </label>

        <Input
          id="bg-color"
          className="col-start-1 col-end-3 row-start-2 row-end-3 w-auto cursor-pointer bg-transparent"
          type="color"
          value={canvasBackgroundColor}
          onChange={onColorInputChange}
        />

        <label htmlFor="bg-image" className="col-start-3 col-end-6 text-xs">
          Background Image
        </label>

        <Hint label="Size up to 3MB max.">
          <Input
            ref={uploadImageRef}
            id="bg-image"
            type="file"
            className="col-start-3 col-end-5 row-start-2 row-end-3 w-auto cursor-pointer bg-transparent"
            onChange={onImageInputChange}
          />
        </Hint>

        <Hint label="Clear Canvas Background">
          <Button
            size="icon"
            variant="outline"
            onClick={clearCanvasBackground}
            className="col-start-5 col-end-6"
          >
            <Trash2Icon className="size-5" />
          </Button>
        </Hint>
      </div>
    </div>
  );
};

export default Backgrounds;
