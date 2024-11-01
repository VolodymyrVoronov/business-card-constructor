import { ChangeEvent } from "react";
import { useShallow } from "zustand/react/shallow";

import { useAppStore } from "@/store/app";

import { Input } from "./ui/input";

const Radius = () => {
  const [selectedId, selectedType, constructorItems, updateConstructorItems] =
    useAppStore(
      useShallow((state) => [
        state.selectedId,
        state.selectedType,
        state.constructorItems,
        state.updateConstructorItems,
      ]),
    );

  if (!selectedId && (selectedType === "rect" || selectedType === "image")) {
    return null;
  } else if (
    selectedType === "circle" ||
    selectedType === "ellipse" ||
    selectedType === "regular-polygon"
  ) {
    return null;
  }

  const selectedConstructorItem = constructorItems
    ? constructorItems.find((item) => item.itemId === selectedId)
    : null;

  const onTopLeftRadiusChange = (e: ChangeEvent<HTMLInputElement>): void => {
    if (selectedConstructorItem) {
      const newItem = {
        ...selectedConstructorItem,
        cornerRadius: [
          parseInt(e.target.value),
          selectedConstructorItem.cornerRadius[1],
          selectedConstructorItem.cornerRadius[2],
          selectedConstructorItem.cornerRadius[3],
        ],
      };

      updateConstructorItems([
        ...constructorItems.filter((item) => item.itemId !== selectedId),
        newItem,
      ]);
    }
  };

  const onTopRightRadiusChange = (e: ChangeEvent<HTMLInputElement>): void => {
    if (selectedConstructorItem) {
      const newItem = {
        ...selectedConstructorItem,
        cornerRadius: [
          selectedConstructorItem.cornerRadius[0],
          parseInt(e.target.value),
          selectedConstructorItem.cornerRadius[2],
          selectedConstructorItem.cornerRadius[3],
        ],
      };

      updateConstructorItems([
        ...constructorItems.filter((item) => item.itemId !== selectedId),
        newItem,
      ]);
    }
  };

  const onBottomLeftRadiusChange = (e: ChangeEvent<HTMLInputElement>): void => {
    if (selectedConstructorItem) {
      const newItem = {
        ...selectedConstructorItem,
        cornerRadius: [
          selectedConstructorItem.cornerRadius[0],
          selectedConstructorItem.cornerRadius[1],
          parseInt(e.target.value),
          selectedConstructorItem.cornerRadius[3],
        ],
      };

      updateConstructorItems([
        ...constructorItems.filter((item) => item.itemId !== selectedId),
        newItem,
      ]);
    }
  };

  const onBottomRightRadiusChange = (
    e: ChangeEvent<HTMLInputElement>,
  ): void => {
    if (selectedConstructorItem) {
      const newItem = {
        ...selectedConstructorItem,
        cornerRadius: [
          selectedConstructorItem.cornerRadius[0],
          selectedConstructorItem.cornerRadius[1],
          selectedConstructorItem.cornerRadius[2],
          parseInt(e.target.value),
        ],
      };

      updateConstructorItems([
        ...constructorItems.filter((item) => item.itemId !== selectedId),
        newItem,
      ]);
    }
  };

  const onFullRadiusChange = (e: ChangeEvent<HTMLInputElement>): void => {
    if (selectedConstructorItem) {
      const newItem = {
        ...selectedConstructorItem,
        cornerRadius: parseInt(e.target.value),
      };

      updateConstructorItems([
        ...constructorItems.filter((item) => item.itemId !== selectedId),
        newItem,
      ]);
    }
  };

  return (
    <div className="flex flex-col gap-y-2 border-b-[1px] border-black p-2 dark:border-slate-500">
      <span className="text-center text-sm font-semibold">Radius</span>

      <div className="grid grid-cols-3 grid-rows-3">
        <div className="">
          <small>Top left</small>
          <Input
            className="h-6"
            type="number"
            disabled={!selectedConstructorItem}
            min={0}
            max={100}
            step={1}
            value={selectedConstructorItem?.cornerRadius[0] ?? 0}
            onChange={onTopLeftRadiusChange}
          />
        </div>

        <div className="col-start-3">
          <small>Top right</small>
          <Input
            className="h-6"
            type="number"
            disabled={!selectedConstructorItem}
            min={0}
            max={100}
            step={1}
            value={selectedConstructorItem?.cornerRadius[1] ?? 0}
            onChange={onTopRightRadiusChange}
          />
        </div>

        <div className="row-start-3">
          <small>Bottom left</small>
          <Input
            className="h-6"
            type="number"
            disabled={!selectedConstructorItem}
            min={0}
            max={100}
            step={1}
            value={selectedConstructorItem?.cornerRadius[3] ?? 0}
            onChange={onBottomRightRadiusChange}
          />
        </div>

        <div className="col-start-3 row-start-3">
          <small>Bottom right</small>
          <Input
            className="h-6"
            type="number"
            disabled={!selectedConstructorItem}
            min={0}
            max={100}
            step={1}
            value={selectedConstructorItem?.cornerRadius[2] ?? 0}
            onChange={onBottomLeftRadiusChange}
          />
        </div>

        <div className="col-start-2 row-start-2">
          <small>Full radius</small>
          <Input
            className="h-6"
            type="number"
            disabled={!selectedConstructorItem}
            min={0}
            max={100}
            step={1}
            value={selectedConstructorItem?.cornerRadius ?? 0}
            onChange={onFullRadiusChange}
          />
        </div>
      </div>
    </div>
  );
};

export default Radius;
