import Konva from "konva";
import { Stage as KonvaStage } from "konva/lib/Stage";
import { rgba } from "polished";
import { useRef } from "react";
import { Layer, Rect, Stage } from "react-konva";
import { useShallow } from "zustand/react/shallow";

import { useAppStore } from "@/store/app";

import ConstructorItems from "./ConstructorItems";
import { Button } from "./ui/button";

const Constructor = () => {
  const [
    dimension,
    canvasBackgroundColor,
    canvasBackgroundColorOpacity,
    canvasGradient,
    setSelectedId,
  ] = useAppStore(
    useShallow((state) => [
      state.dimension,
      state.canvasBackgroundColor,
      state.canvasBackgroundColorOpacity,
      state.canvasGradient,
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

  const exportAsPNG = () => {
    if (!canvasRef.current) {
      return;
    }

    const dataURL = canvasRef.current.toDataURL();
    const link = document.createElement("a");
    link.href = dataURL;
    link.download = "business_card.png";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const fillColor = canvasBackgroundColor
    ? rgba(canvasBackgroundColor, canvasBackgroundColorOpacity / 100)
    : undefined;
  const fillGradient = canvasGradient
    ? {
        fillPriority: "linear-gradient",
        fillLinearGradientEndPointX: dimension.width,
        fillLinearGradientEndPointY: dimension.height,
        fillLinearGradientStartPointY: 0,
        fillLinearGradientColorStops: [
          0,
          canvasGradient?.[0] ? canvasGradient[0] : "transparent",
          1,
          canvasGradient?.[1] ? canvasGradient[1] : "transparent",
        ],
        fillLinearGradientStartPoint: { x: 0, y: 0 },
        fillLinearGradientEndPoint: { x: dimension.width, y: dimension.height },
      }
    : undefined;

  const isBackground = fillColor || fillGradient;

  return (
    <div className="mt-2 flex flex-col items-center justify-start gap-2 align-top">
      <Button onClick={exportAsPNG} size="sm">
        Export as PNG
      </Button>

      <Stage
        ref={canvasRef}
        width={dimension.width}
        height={dimension.height}
        onMouseDown={checkDeselect}
        onTouchStart={checkDeselect}
        className="border-[1px] border-dotted border-black dark:border-slate-500"
      >
        <Layer>
          {isBackground && (
            <Rect
              x={0}
              y={0}
              width={dimension.width}
              height={dimension.height}
              fill={fillColor}
              {...fillGradient}
              zIndex={-1}
            />
          )}

          <ConstructorItems />
        </Layer>
      </Stage>
    </div>
  );
};

export default Constructor;
