import { ChangeEvent } from "react";
import { useShallow } from "zustand/react/shallow";

import { useAppStore } from "@/store/app";

import { Input } from "./ui/input";

const Border = () => {
  const [selectedId, selectedType, constructorItems, updateConstructorItems] =
    useAppStore(
      useShallow((state) => [
        state.selectedId,
        state.selectedType,
        state.constructorItems,
        state.updateConstructorItems,
      ]),
    );

  if (!selectedId && selectedType === "rect") {
    return null;
  }

  const selectedConstructorItem = constructorItems
    ? constructorItems.find((item) => item.itemId === selectedId)
    : null;

  const onBorderColorChange = (e: ChangeEvent<HTMLInputElement>): void => {
    if (selectedConstructorItem) {
      const newItem = {
        ...selectedConstructorItem,
        stroke: e.target.value,
      };

      updateConstructorItems([
        ...constructorItems.filter((item) => item.itemId !== selectedId),
        newItem,
      ]);
    }
  };

  const onBorderWidthChange = (e: ChangeEvent<HTMLInputElement>): void => {
    if (selectedConstructorItem) {
      const newItem = {
        ...selectedConstructorItem,
        strokeWidth: parseInt(e.target.value),
      };

      updateConstructorItems([
        ...constructorItems.filter((item) => item.itemId !== selectedId),
        newItem,
      ]);
    }
  };

  return (
    <div className="flex flex-col gap-y-2 border-b-[1px] border-black p-2 dark:border-slate-500">
      <span className="text-center text-sm font-semibold">Border</span>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <small>Color</small>
          <Input
            className="w-full cursor-pointer bg-transparent"
            type="color"
            value={selectedConstructorItem?.stroke as string}
            onChange={onBorderColorChange}
          />
        </div>

        <div>
          <small>Width</small>
          <Input
            className="w-full"
            type="number"
            min={0}
            value={selectedConstructorItem?.strokeWidth}
            onChange={onBorderWidthChange}
          />
        </div>
      </div>
    </div>
  );
};

export default Border;
