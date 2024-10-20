import { Trash2Icon } from "lucide-react";
import { ChangeEvent, useRef } from "react";
import { useShallow } from "zustand/react/shallow";

import convertToBase64 from "@/helpers/convertToBase64";
import { useAppStore } from "@/store/app";

import { Hint } from "./Hint";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

const BackgroundOptions = () => {
  const [
    canvasBackgroundColor,
    setCanvasBackgroundColor,
    setCanvasBackgroundImage,
    clearCanvasBackground,
  ] = useAppStore(
    useShallow((state) => [
      state.canvasBackgroundColor,
      state.setCanvasBackgroundColor,
      state.setCanvasBackgroundImage,
      state.clearCanvasBackground,
    ]),
  );

  const uploadImageRef = useRef<HTMLInputElement>(null);

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
  );
};

export default BackgroundOptions;
