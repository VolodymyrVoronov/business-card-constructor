import { ChangeEvent } from "react";
import { useShallow } from "zustand/react/shallow";

import { useAppStore } from "@/store/app";

import { Input } from "./ui/input";
import { Slider } from "./ui/slider";

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

  if (
    !selectedId &&
    (selectedType === "rect" ||
      selectedType === "image" ||
      selectedType === "arc" ||
      selectedType === "star")
  ) {
    return null;
  } else if (
    selectedType === "circle" ||
    selectedType === "ellipse" ||
    selectedType === "regular-polygon" ||
    selectedType === "svg-path"
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

  const onInnerRadiusChange = (e: ChangeEvent<HTMLInputElement>): void => {
    if (selectedConstructorItem) {
      const newItem = {
        ...selectedConstructorItem,
        innerRadius: parseInt(e.target.value),
      };

      updateConstructorItems([
        ...constructorItems.filter((item) => item.itemId !== selectedId),
        newItem,
      ]);
    }
  };

  const onOuterRadiusChange = (e: ChangeEvent<HTMLInputElement>): void => {
    if (selectedConstructorItem) {
      const newItem = {
        ...selectedConstructorItem,
        outerRadius: parseInt(e.target.value),
      };

      updateConstructorItems([
        ...constructorItems.filter((item) => item.itemId !== selectedId),
        newItem,
      ]);
    }
  };

  const onAngleChange = (value: number[]): void => {
    if (selectedConstructorItem) {
      const newItem = {
        ...selectedConstructorItem,
        angle: value[0],
      };

      updateConstructorItems([
        ...constructorItems.filter((item) => item.itemId !== selectedId),
        newItem,
      ]);
    }
  };

  const onNumberOfPointsChange = (value: number[]): void => {
    if (selectedConstructorItem) {
      const newItem = {
        ...selectedConstructorItem,
        numPoints: value[0],
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

      {selectedType === "arc" || selectedType === "star" ? (
        <div>
          <div className="grid grid-cols-2 gap-2">
            <div className="">
              <small>Inner</small>
              <Input
                className="h-6"
                type="number"
                disabled={!selectedConstructorItem}
                min={1}
                step={1}
                value={selectedConstructorItem?.innerRadius ?? 0}
                onChange={onInnerRadiusChange}
              />
            </div>

            <div className="row-start-1">
              <small>Outer</small>
              <Input
                className="h-6"
                type="number"
                disabled={!selectedConstructorItem}
                min={1}
                step={1}
                value={selectedConstructorItem?.outerRadius ?? 0}
                onChange={onOuterRadiusChange}
              />
            </div>
          </div>

          {selectedType === "star" ? (
            <>
              <div className="mb-2 mt-5 flex w-full flex-col items-center gap-2">
                <small>Points {selectedConstructorItem?.numPoints}</small>

                <Slider
                  onValueChange={onNumberOfPointsChange}
                  value={[selectedConstructorItem?.numPoints || 5]}
                  min={2}
                  max={25}
                  step={1}
                  className="w-full"
                />
              </div>
            </>
          ) : (
            <>
              <div className="mb-2 mt-5 flex w-full flex-col items-center gap-2">
                <small>
                  Angle {selectedConstructorItem?.angle}
                  <sup>o</sup>
                </small>

                <Slider
                  onValueChange={onAngleChange}
                  value={[selectedConstructorItem?.angle || 360]}
                  min={1}
                  max={360}
                  step={1}
                  className="w-full"
                />
              </div>
            </>
          )}
        </div>
      ) : (
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
      )}
    </div>
  );
};

export default Radius;
