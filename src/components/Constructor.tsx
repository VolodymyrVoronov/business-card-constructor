import Konva from "konva";
import { Stage as KonvaStage } from "konva/lib/Stage";
import { useRef } from "react";
import { Layer, Stage } from "react-konva";
import { useShallow } from "zustand/react/shallow";

import { useAppStore } from "@/store/app";

import ConstructorItems from "./ConstructorItems";

const Constructor = () => {
  const [
    dimension,
    canvasBackgroundColor,
    canvasGradient,
    canvasBackgroundImage,
    setSelectedId,
  ] = useAppStore(
    useShallow((state) => [
      state.dimension,
      state.canvasBackgroundColor,
      state.canvasGradient,
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

  const canvasBackground = () => {
    if (canvasBackgroundColor) {
      return {
        backgroundColor: canvasBackgroundColor,
      };
    }
    if (canvasGradient) {
      return {
        backgroundImage: `linear-gradient(${canvasGradient})`,
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
  };

  console.log("canvasBackground", canvasBackground());

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
          ...canvasBackground(),
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
