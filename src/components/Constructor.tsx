import Konva from "konva";
import { Stage as KonvaStage } from "konva/lib/Stage";
import { useRef } from "react";
import { Layer, Stage } from "react-konva";
import { useShallow } from "zustand/react/shallow";

import { useAppStore } from "@/store/app";

import ConstructorItems from "./ConstructorItems";

const Constructor = () => {
  const [dimension, setSelectedId] = useAppStore(
    useShallow((state) => [state.dimension, state.setSelectedId]),
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

  return (
    <div className="mt-[2rem] flex items-start justify-center align-top">
      <Stage
        ref={canvasRef}
        width={dimension.width}
        height={dimension.height}
        onMouseDown={checkDeselect}
        onTouchStart={checkDeselect}
        className="border-[1px] border-dotted border-black dark:border-slate-500"
      >
        <Layer>
          <ConstructorItems />
        </Layer>
      </Stage>
    </div>
  );
};

export default Constructor;
