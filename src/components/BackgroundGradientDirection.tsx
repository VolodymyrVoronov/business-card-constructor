import { ArrowDown, ArrowLeft, ArrowRight, ArrowUp } from "lucide-react";
import { useShallow } from "zustand/react/shallow";

import { useAppStore } from "@/store/app";
import { GradientDirection } from "@/types";

import { Hint } from "./Hint";
import { Button } from "./ui/button";

const BackgroundGradientDirection = () => {
  const [canvasGradientDirection, setCanvasGradientDirection] = useAppStore(
    useShallow((state) => [
      state.canvasGradientDirection,
      state.setCanvasGradientDirection,
    ]),
  );

  const onDirectionButtonClick = (direction: GradientDirection): void => {
    setCanvasGradientDirection(direction);
  };

  return (
    <div className="flex flex-row items-center gap-x-2">
      <span>Direction:</span>

      <div className="flex flex-row gap-x-2">
        <Hint label="To left">
          <Button
            size="iconXs"
            variant={
              canvasGradientDirection === "to left" ? "default" : "outline"
            }
            className={"col-start-5 col-end-6"}
            onClick={() => onDirectionButtonClick("to left")}
          >
            <ArrowLeft className="size-5" />
          </Button>
        </Hint>

        <Hint label="To top">
          <Button
            size="iconXs"
            variant={
              canvasGradientDirection === "to top" ? "default" : "outline"
            }
            className={"col-start-5 col-end-6"}
            onClick={() => onDirectionButtonClick("to top")}
          >
            <ArrowUp className="size-5" />
          </Button>
        </Hint>

        <Hint label="To bottom">
          <Button
            size="iconXs"
            variant={
              canvasGradientDirection === "to bottom" ? "default" : "outline"
            }
            className={"col-start-5 col-end-6"}
            onClick={() => onDirectionButtonClick("to bottom")}
          >
            <ArrowDown className="size-5" />
          </Button>
        </Hint>

        <Hint label="To right">
          <Button
            size="iconXs"
            variant={
              canvasGradientDirection === "to right" ? "default" : "outline"
            }
            className={"col-start-5 col-end-6"}
            onClick={() => onDirectionButtonClick("to right")}
          >
            <ArrowRight className="size-5" />
          </Button>
        </Hint>
      </div>
    </div>
  );
};

export default BackgroundGradientDirection;
