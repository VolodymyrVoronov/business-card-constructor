import Konva from "konva";
import { useEffect, useRef } from "react";
import { Image, Transformer } from "react-konva";

import { ConstructorItem } from "@/types";
import useImage from "use-image";

interface IImageConstructorItemProps {
  dimension: { width: number; height: number };
  constructorItem: ConstructorItem;
  isSelected: boolean;
  onSelect: (e: Konva.KonvaEventObject<MouseEvent>) => void;
  onChange: (newAttrs: ConstructorItem, id: string) => void;
}

const ImageConstructorItem = ({
  dimension,
  constructorItem,
  isSelected,
  onSelect,
  onChange,
}: IImageConstructorItemProps) => {
  const shapeRef = useRef<Konva.Image>(null);
  const trRef = useRef<Konva.Transformer>(new Konva.Transformer());

  const [image] = useImage(constructorItem.image);

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

  const imageWidth =
    (image?.width as number) > dimension.width
      ? (image?.width as number) / 4
      : image?.width || 0;
  const imageHeight =
    (image?.height as number) > dimension.height
      ? (image?.height as number) / 4
      : image?.height || 0;

  return (
    <>
      <Image
        ref={shapeRef}
        onClick={onSelect}
        onTap={onSelect}
        width={imageWidth}
        height={imageHeight}
        {...constructorItem}
        opacity={constructorItem.opacity! / 100}
        image={image}
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

export default ImageConstructorItem;
