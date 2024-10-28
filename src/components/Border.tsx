import { RotateCcw, SquareDashedKanban } from "lucide-react";
import { ChangeEvent } from "react";
import { useShallow } from "zustand/react/shallow";

import { useAppStore } from "@/store/app";

import { Button } from "./ui/button";
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

  if (!selectedId && (selectedType === "rect" || selectedType === "image")) {
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

  const onDashedClick = (): void => {
    if (selectedConstructorItem) {
      const newItem = {
        ...selectedConstructorItem,
        dashEnabled: !selectedConstructorItem.dashEnabled,
      };

      updateConstructorItems([
        ...constructorItems.filter((item) => item.itemId !== selectedId),
        newItem,
      ]);
    }
  };

  const onBorderResetClick = (): void => {
    if (selectedConstructorItem) {
      const newItem = {
        ...selectedConstructorItem,
        stroke: "transparent",
        strokeWidth: 0,
      };

      updateConstructorItems([
        ...constructorItems.filter((item) => item.itemId !== selectedId),
        newItem,
      ]);
    }
  };

  const onDashSizeChange = (e: ChangeEvent<HTMLInputElement>): void => {
    if (selectedConstructorItem) {
      const newItem = {
        ...selectedConstructorItem,
        dash: [parseInt(e.target.value), selectedConstructorItem.dash?.[1]] as [
          number,
          number,
        ],
      };

      updateConstructorItems([
        ...constructorItems.filter((item) => item.itemId !== selectedId),
        newItem,
      ]);
    }
  };

  const onSpaceBetweenDashChange = (e: ChangeEvent<HTMLInputElement>): void => {
    if (selectedConstructorItem) {
      const newItem = {
        ...selectedConstructorItem,
        dash: [selectedConstructorItem.dash?.[0], parseInt(e.target.value)] as [
          number,
          number,
        ],
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

      <div className="grid grid-cols-6 gap-4">
        <div className="col-span-2">
          <small>Color</small>
          <Input
            className="w-full cursor-pointer bg-transparent"
            type="color"
            value={selectedConstructorItem?.stroke as string}
            onChange={onBorderColorChange}
          />
        </div>

        <div className="col-span-2">
          <small>Width</small>
          <Input
            className="w-full"
            type="number"
            min={0}
            value={selectedConstructorItem?.strokeWidth}
            onChange={onBorderWidthChange}
          />
        </div>

        {(selectedConstructorItem?.strokeWidth as number) > 0 && (
          <div className="col-span-1">
            <small>Dash</small>
            <Button
              type="button"
              size="icon"
              onClick={onDashedClick}
              variant={
                selectedConstructorItem?.dashEnabled ? "default" : "outline"
              }
            >
              <SquareDashedKanban className="is" />

              <span className="sr-only">Dash</span>
            </Button>
          </div>
        )}

        <div className="col-span-1">
          <small>Reset</small>
          <Button
            type="button"
            size="icon"
            onClick={onBorderResetClick}
            variant="outline"
          >
            <RotateCcw className="is" />

            <span className="sr-only">Reset</span>
          </Button>
        </div>

        {selectedConstructorItem?.dashEnabled && (
          <>
            <div className="col-span-3">
              <small>Dash size</small>
              <Input
                className="w-full cursor-pointer bg-transparent"
                type="number"
                value={selectedConstructorItem?.dash?.[0] ?? 0}
                onChange={onDashSizeChange}
              />
            </div>

            <div className="col-span-3">
              <small>Space</small>
              <Input
                className="w-full cursor-pointer bg-transparent"
                type="number"
                value={selectedConstructorItem?.dash?.[1] ?? 0}
                onChange={onSpaceBetweenDashChange}
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Border;
