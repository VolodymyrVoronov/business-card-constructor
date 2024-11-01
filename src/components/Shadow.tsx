import { Vector2d } from "konva/lib/types";
import { ChangeEvent } from "react";
import { useShallow } from "zustand/react/shallow";

import { useAppStore } from "@/store/app";

import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { RotateCcw } from "lucide-react";

const Shadow = () => {
  const [selectedType, selectedId, constructorItems, updateConstructorItems] =
    useAppStore(
      useShallow((state) => [
        state.selectedType,
        state.selectedId,
        state.constructorItems,
        state.updateConstructorItems,
      ]),
    );

  if (
    !selectedId ||
    (selectedType !== "image" &&
      selectedType !== "rect" &&
      selectedType !== "circle" &&
      selectedType !== "ellipse" &&
      selectedType !== "regular-polygon" &&
      selectedType !== "arc")
  ) {
    return null;
  }

  const selectedConstructorItem = constructorItems
    ? constructorItems.find((item) => item.itemId === selectedId)
    : null;

  const onShadowColorChange = (e: ChangeEvent<HTMLInputElement>): void => {
    if (selectedConstructorItem) {
      const newItem = {
        ...selectedConstructorItem,
        shadowColor: e.target.value,
      };

      updateConstructorItems([
        ...constructorItems.filter((item) => item.itemId !== selectedId),
        newItem,
      ]);
    }
  };

  const onShadowOffsetXChange = (e: ChangeEvent<HTMLInputElement>): void => {
    if (selectedConstructorItem) {
      const newItem = {
        ...selectedConstructorItem,
        shadowOffset: {
          ...selectedConstructorItem.shadowOffset,
          x: parseInt(e.target.value),
        } as Vector2d,
      };

      updateConstructorItems([
        ...constructorItems.filter((item) => item.itemId !== selectedId),
        newItem,
      ]);
    }
  };

  const onShadowOffsetYChange = (e: ChangeEvent<HTMLInputElement>): void => {
    if (selectedConstructorItem) {
      const newItem = {
        ...selectedConstructorItem,
        shadowOffset: {
          ...selectedConstructorItem.shadowOffset,
          y: parseInt(e.target.value),
        } as Vector2d,
      };

      updateConstructorItems([
        ...constructorItems.filter((item) => item.itemId !== selectedId),
        newItem,
      ]);
    }
  };

  const onShadowBlurChange = (e: ChangeEvent<HTMLInputElement>): void => {
    if (selectedConstructorItem) {
      const newItem = {
        ...selectedConstructorItem,
        shadowBlur: parseInt(e.target.value),
      };

      updateConstructorItems([
        ...constructorItems.filter((item) => item.itemId !== selectedId),
        newItem,
      ]);
    }
  };

  const onShadowResetClick = (): void => {
    if (selectedConstructorItem) {
      const newItem = {
        ...selectedConstructorItem,
        shadowColor: "transparent",
        shadowOffset: { x: 0, y: 0 },
        shadowBlur: 0,
      };

      updateConstructorItems([
        ...constructorItems.filter((item) => item.itemId !== selectedId),
        newItem,
      ]);
    }
  };

  return (
    <div className="flex flex-col gap-y-3 border-b-[1px] border-black p-2 pb-4 dark:border-slate-500">
      <span className="text-center text-sm font-semibold">Shadow</span>

      <div className="grid grid-cols-4 gap-2">
        <div className="col-span-1">
          <small>Color</small>
          <Input
            className="w-full cursor-pointer bg-transparent"
            type="color"
            value={selectedConstructorItem?.shadowColor as string}
            onChange={onShadowColorChange}
          />
        </div>

        <div className="col-span-1">
          <small>Offset X</small>
          <Input
            className="w-full cursor-pointer bg-transparent"
            type="number"
            value={selectedConstructorItem?.shadowOffset?.x ?? 0}
            onChange={onShadowOffsetXChange}
          />
        </div>

        <div className="col-span-1">
          <small>Offset Y</small>
          <Input
            className="w-full cursor-pointer bg-transparent"
            type="number"
            value={selectedConstructorItem?.shadowOffset?.y ?? 0}
            onChange={onShadowOffsetYChange}
          />
        </div>

        <div className="col-span-1">
          <small>Blur</small>
          <Input
            className="w-full cursor-pointer bg-transparent"
            type="number"
            value={selectedConstructorItem?.shadowBlur ?? 0}
            onChange={onShadowBlurChange}
          />
        </div>

        <div className="col-span-1">
          <small>Reset</small>
          <Button
            type="button"
            size="icon"
            onClick={onShadowResetClick}
            variant="outline"
          >
            <RotateCcw className="is" />

            <span className="sr-only">Reset</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Shadow;
