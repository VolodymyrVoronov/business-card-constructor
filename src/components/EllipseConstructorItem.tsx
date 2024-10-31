import Konva from "konva";
import { useEffect, useRef } from "react";
import { Ellipse, Transformer } from "react-konva";

import { ConstructorItem } from "@/types";

interface IEllipseConstructorItemProps {
  constructorItem: ConstructorItem;
  isSelected: boolean;
  onSelect: (e: Konva.KonvaEventObject<MouseEvent>) => void;
  onChange: (newAttrs: ConstructorItem, id: string) => void;
}

const EllipseConstructorItem = ({
  constructorItem,
  isSelected,
  onSelect,
  onChange,
}: IEllipseConstructorItemProps) => {
  const shapeRef = useRef<Konva.Ellipse>(null);
  const trRef = useRef<Konva.Transformer>(new Konva.Transformer());

  useEffect(() => {
    if (isSelected && shapeRef.current) {
      trRef.current.nodes([shapeRef.current]);
      trRef.current?.getLayer()?.batchDraw();
    }
  }, [isSelected]);

  useEffect(() => {
    if (isSelected && shapeRef.current) {
      shapeRef.current?.setZIndex(constructorItem.zIndex);
    }
  }, [isSelected, constructorItem.zIndex]);

  return (
    <>
      <Ellipse
        ref={shapeRef}
        onClick={onSelect}
        fill={constructorItem.fill}
        onTap={onSelect}
        {...constructorItem}
        opacity={constructorItem.opacity! / 100}
        shadowColor={constructorItem.shadowColor}
        shadowBlur={constructorItem.shadowBlur}
        shadowOffset={constructorItem.shadowOffset}
        radiusX={constructorItem.radiusX}
        radiusY={constructorItem.radiusY}
        draggable
        onDragEnd={(e) => {
          onChange(
            {
              ...constructorItem,
              x: e.target.x(),
              y: e.target.y(),
            },
            constructorItem.itemId,
          );
        }}
        onTransformEnd={() => {
          const node = shapeRef.current;

          if (node) {
            const scaleX = node.scaleX();
            const scaleY = node.scaleY();

            node.scaleX(1);
            node.scaleY(1);
            onChange(
              {
                ...constructorItem,
                x: node.x(),
                y: node.y(),
                width: Math.max(5, node.width() * scaleX),
                height: Math.max(node.height() * scaleY),
                rotation: node.rotation(),
              },
              constructorItem.itemId,
            );
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
            const radiusX = node.radiusX();
            const radiusY = node.radiusY();

            return {
              x: Math.max(
                radiusX,
                Math.min(pos.x, containerRect.width - radiusX),
              ),
              y: Math.max(
                radiusY,
                Math.min(pos.y, containerRect.height - radiusY),
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

export default EllipseConstructorItem;
