import { ChangeEvent } from "react";
import { useShallow } from "zustand/react/shallow";

import { useAppStore } from "@/store/app";

import { Input } from "./ui/input";

const Sides = () => {
  const [selectedId, selectedType, constructorItems, updateConstructorItems] =
    useAppStore(
      useShallow((state) => [
        state.selectedId,
        state.selectedType,
        state.constructorItems,
        state.updateConstructorItems,
      ]),
    );

  if (!selectedId && selectedType === "regular-polygon") {
    return null;
  } else if (selectedType !== "regular-polygon") {
    return null;
  }

  const selectedConstructorItem = constructorItems
    ? constructorItems.find((item) => item.itemId === selectedId)
    : null;

  const onSidesChange = (e: ChangeEvent<HTMLInputElement>): void => {
    if (selectedConstructorItem) {
      const newItem = {
        ...selectedConstructorItem,
        sides: e.target.valueAsNumber,
      };

      updateConstructorItems([
        ...constructorItems.filter((item) => item.itemId !== selectedId),
        newItem,
      ]);
    }
  };

  return (
    <div className="flex flex-col gap-y-2 border-b-[1px] border-black p-2 dark:border-slate-500">
      <span className="text-center text-sm font-semibold">Sides</span>

      <div className="flex gap-x-2">
        <Input
          className="w-full cursor-pointer bg-transparent"
          type="number"
          value={selectedConstructorItem?.sides ?? 0}
          onChange={onSidesChange}
          min={3}
        />
      </div>
    </div>
  );
};

export default Sides;
