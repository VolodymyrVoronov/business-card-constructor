import { useShallow } from "zustand/react/shallow";

import { useAppStore } from "@/store/app";

import RectangleConstructorItem from "./RectangleConstructorItem";

const ConstructorItems = () => {
  const [selectedId, constructorItems, updateConstructorItems, setSelectedId] =
    useAppStore(
      useShallow((state) => [
        state.selectedId,
        state.constructorItems,
        state.updateConstructorItems,
        state.setSelectedId,
      ]),
    );

  console.log("constructorItems", constructorItems);

  const reactItems = constructorItems.filter((item) => item.type === "rect");

  return (
    <>
      {reactItems.map((rect, i) => (
        <RectangleConstructorItem
          key={i}
          shapeProps={rect}
          isSelected={rect.itemId === selectedId}
          onSelect={() => {
            setSelectedId(rect.itemId);
          }}
          onChange={(newAttrs) => {
            const rects = constructorItems.slice();
            rects[i] = newAttrs;
            updateConstructorItems(rects);
          }}
        />
      ))}
    </>
  );
};

export default ConstructorItems;
