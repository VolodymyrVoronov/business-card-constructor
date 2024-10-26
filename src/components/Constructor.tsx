import Konva from "konva";
import { Stage as KonvaStage } from "konva/lib/Stage";
import { rgba } from "polished";
import { useMemo, useRef } from "react";
import { Layer, Stage } from "react-konva";
import { useShallow } from "zustand/react/shallow";

import { useAppStore } from "@/store/app";
import { GradientDirection } from "@/types";

import ConstructorItems from "./ConstructorItems";

const Constructor = () => {
  const [
    dimension,
    canvasBackgroundColor,
    canvasBackgroundColorOpacity,
    canvasGradient,
    canvasGradientDirection,
    canvasBackgroundImage,
    setSelectedId,
  ] = useAppStore(
    useShallow((state) => [
      state.dimension,
      state.canvasBackgroundColor,
      state.canvasBackgroundColorOpacity,
      state.canvasGradient,
      state.canvasGradientDirection,
      state.canvasBackgroundImage,
      state.setSelectedId,
    ]),
  );

  const canvasRef = useRef<KonvaStage | null>(null);

  const checkDeselect = (
    e: Konva.KonvaEventObject<MouseEvent> | Konva.KonvaEventObject<TouchEvent>,
  ) => {
    const clickedOnEmpty = e.target === e.target.getStage();

    if (clickedOnEmpty) {
      setSelectedId("");
    }
  };

  const canvasBackground = useMemo(
    () => (canvasGradientDirection: GradientDirection) => {
      if (canvasBackgroundColor) {
        return {
          backgroundColor: rgba(
            canvasBackgroundColor,
            canvasBackgroundColorOpacity / 100,
          ),
        };
      }
      if (canvasGradient) {
        return {
          backgroundImage: `linear-gradient(${canvasGradientDirection}, ${canvasGradient})`,
        };
      }

      if (canvasBackgroundImage) {
        return {
          backgroundImage: `url(${canvasBackgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        };
      }
    },
    [
      canvasBackgroundColor,
      canvasGradient,
      canvasBackgroundImage,
      canvasBackgroundColorOpacity,
    ],
  );

  return (
    <div className="mt-[2rem] flex items-start justify-center align-top">
      <Stage
        ref={canvasRef}
        width={dimension.width}
        height={dimension.height}
        onMouseDown={checkDeselect}
        onTouchStart={checkDeselect}
        className="border-[1px] border-dotted border-black dark:border-slate-500"
        style={{
          ...canvasBackground(canvasGradientDirection),
        }}
      >
        <Layer>
          <ConstructorItems />
        </Layer>
      </Stage>
    </div>
  );
};

export default Constructor;
