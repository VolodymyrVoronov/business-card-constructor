import Konva from "konva";
import { useEffect, useRef } from "react";
import { Rect, Transformer } from "react-konva";

import { ConstructorItem } from "@/types";

interface IRectangleConstructorItemProps {
  shapeProps: ConstructorItem;
  isSelected: boolean;
  onSelect: () => void;
  onChange: (newAttrs: ConstructorItem) => void;
}

const RectangleConstructorItem = ({
  shapeProps,
  isSelected,
  onSelect,
  onChange,
}: IRectangleConstructorItemProps) => {
  const shapeRef = useRef<Konva.Rect>(null);
  const trRef = useRef<Konva.Transformer>(new Konva.Transformer());

  useEffect(() => {
    if (isSelected && shapeRef.current) {
      trRef.current.nodes([shapeRef.current]);
      trRef.current?.getLayer()?.batchDraw();
    }
  }, [isSelected]);

  return (
    <>
      <Rect
        ref={shapeRef}
        fill={shapeProps.fill}
        onClick={onSelect}
        onTap={onSelect}
        {...shapeProps}
        draggable
        onDragEnd={(e) => {
          onChange({
            ...shapeProps,
            x: e.target.x(),
            y: e.target.y(),
          });
        }}
        onTransformEnd={() => {
          const node = shapeRef.current;

          if (node) {
            const scaleX = node.scaleX();
            const scaleY = node.scaleY();

            node.scaleX(1);
            node.scaleY(1);
            onChange({
              ...shapeProps,
              x: node.x(),
              y: node.y(),
              width: Math.max(5, node.width() * scaleX),
              height: Math.max(node.height() * scaleY),
              rotation: node.rotation(),
            });
          }
        }}
        dragBoundFunc={(pos) => {
          const node = shapeRef.current;

          if (node) {
            const stage = node.getStage();
            if (!stage) {
              return pos;
            }
            const container = stage.container();
            if (!container) {
              return pos;
            }
            const containerRect = container.getBoundingClientRect();
            return {
              x: Math.max(
                0,
                Math.min(pos.x, containerRect.width - node.width()),
              ),
              y: Math.max(
                0,
                Math.min(pos.y, containerRect.height - node.height()),
              ),
            };
          }

          return pos;
        }}
      />
      {isSelected && (
        <Transformer
          ref={trRef}
          flipEnabled={false}
          boundBoxFunc={(oldBox, newBox) => {
            // limit resize
            if (Math.abs(newBox.width) < 5 || Math.abs(newBox.height) < 5) {
              return oldBox;
            }
            return newBox;
          }}
        />
      )}
    </>
  );
};

export default RectangleConstructorItem;
