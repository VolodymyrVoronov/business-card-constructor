import { useShallow } from "zustand/react/shallow";

import { useAppStore } from "@/store/app";

import ImageConstructorItem from "./ImageConstructorItem";
import RectangleConstructorItem from "./RectangleConstructorItem";

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
    </>
  );
};

export default ConstructorItems;
