import { useShallow } from "zustand/react/shallow";

import { useAppStore } from "@/store/app";

import CircleConstructorItem from "./CircleConstructorItem";
import EllipseConstructorItem from "./EllipseConstructorItem";
import ImageConstructorItem from "./ImageConstructorItem";
import PolygonConstructorItem from "./PolygonConstructorItem";
import RectangleConstructorItem from "./RectangleConstructorItem";
import ArcConstructorItem from "./ArcConstructorItem";

const ConstructorItems = () => {
  const [
    selectedId,
    dimension,
    constructorItems,
    updateConstructorItems,
    setSelectedId,
    setSelectedType,
  ] = useAppStore(
    useShallow((state) => [
      state.selectedId,
      state.dimension,
      state.constructorItems,
      state.updateConstructorItems,
      state.setSelectedId,
      state.setSelectedType,
    ]),
  );

  const reactItems = constructorItems.filter((item) => item.type === "rect");
  const imageItems = constructorItems.filter((item) => item.type === "image");
  const circleItems = constructorItems.filter((item) => item.type === "circle");
  const ellipseItems = constructorItems.filter(
    (item) => item.type === "ellipse",
  );
  const polygonItems = constructorItems.filter(
    (item) => item.type === "regular-polygon",
  );
  const arcItems = constructorItems.filter((item) => item.type === "arc");

  return (
    <>
      {reactItems.map((rect, i) => (
        <RectangleConstructorItem
          key={i}
          constructorItem={rect}
          isSelected={rect.itemId === selectedId}
          onSelect={() => {
            setSelectedId(rect.itemId);
            setSelectedType("rect");
          }}
          onChange={(newAttrs, id) => {
            const rects = constructorItems.slice();

            const newRects = rects.map((item) => {
              if (item.itemId === id) {
                return newAttrs;
              }
              return item;
            });

            updateConstructorItems(newRects);
          }}
        />
      ))}

      {imageItems.map((image, i) => (
        <ImageConstructorItem
          key={i}
          dimension={dimension}
          constructorItem={image}
          isSelected={image.itemId === selectedId}
          onSelect={() => {
            setSelectedId(image.itemId);
            setSelectedType("image");
          }}
          onChange={(newAttrs, id) => {
            const images = constructorItems.slice();

            const newImages = images.map((item) => {
              if (item.itemId === id) {
                return newAttrs;
              }
              return item;
            });

            updateConstructorItems(newImages);
          }}
        />
      ))}

      {circleItems.map((circle, i) => (
        <CircleConstructorItem
          key={i}
          constructorItem={circle}
          isSelected={circle.itemId === selectedId}
          onSelect={() => {
            setSelectedId(circle.itemId);
            setSelectedType("circle");
          }}
          onChange={(newAttrs, id) => {
            const circles = constructorItems.slice();

            const newCircles = circles.map((item) => {
              if (item.itemId === id) {
                return newAttrs;
              }
              return item;
            });

            updateConstructorItems(newCircles);
          }}
        />
      ))}

      {ellipseItems.map((ellipse, i) => (
        <EllipseConstructorItem
          key={i}
          constructorItem={ellipse}
          isSelected={ellipse.itemId === selectedId}
          onSelect={() => {
            setSelectedId(ellipse.itemId);
            setSelectedType("ellipse");
          }}
          onChange={(newAttrs, id) => {
            const ellipses = constructorItems.slice();

            const newEllipses = ellipses.map((item) => {
              if (item.itemId === id) {
                return newAttrs;
              }
              return item;
            });

            updateConstructorItems(newEllipses);
          }}
        />
      ))}

      {polygonItems.map((polygon, i) => (
        <PolygonConstructorItem
          key={i}
          constructorItem={polygon}
          isSelected={polygon.itemId === selectedId}
          onSelect={() => {
            setSelectedId(polygon.itemId);
            setSelectedType("regular-polygon");
          }}
          onChange={(newAttrs, id) => {
            const polygons = constructorItems.slice();

            const newPolygons = polygons.map((item) => {
              if (item.itemId === id) {
                return newAttrs;
              }
              return item;
            });

            updateConstructorItems(newPolygons);
          }}
        />
      ))}

      {arcItems.map((arc, i) => (
        <ArcConstructorItem
          key={i}
          constructorItem={arc}
          isSelected={arc.itemId === selectedId}
          onSelect={() => {
            setSelectedId(arc.itemId);
            setSelectedType("arc");
          }}
          onChange={(newAttrs, id) => {
            const arcs = constructorItems.slice();

            const newArcs = arcs.map((item) => {
              if (item.itemId === id) {
                return newAttrs;
              }
              return item;
            });

            updateConstructorItems(newArcs);
          }}
        />
      ))}
    </>
  );
};

export default ConstructorItems;
