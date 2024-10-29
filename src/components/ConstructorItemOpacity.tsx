import { useShallow } from "zustand/react/shallow";

import { useAppStore } from "@/store/app";

import { Slider } from "@/components/ui/slider";

const ConstructorItemOpacity = () => {
  const [selectedType, selectedId, constructorItems, updateConstructorItems] =
    useAppStore(
      useShallow((state) => [
        state.selectedType,
        state.selectedId,
        state.constructorItems,
        state.updateConstructorItems,
      ]),
    );

  if (!selectedId || (selectedType !== "image" && selectedType !== "rect")) {
    return null;
  }

  const selectedConstructorItem = constructorItems
    ? constructorItems.find((item) => item.itemId === selectedId)
    : null;

  const onSliderChange = (value: number[]): void => {
    if (selectedConstructorItem) {
      const newItem = {
        ...selectedConstructorItem,
        opacity: value[0],
      };

      updateConstructorItems([
        ...constructorItems.filter((item) => item.itemId !== selectedId),
        newItem,
      ]);
    }
  };

  return (
    <div className="flex flex-col gap-y-2 border-b-[1px] border-black p-2 pb-4 dark:border-slate-500">
      <span className="text-center text-sm font-semibold">
        Opacity {`(${selectedConstructorItem?.opacity || 100}%)`}
      </span>

      <Slider
        onValueChange={onSliderChange}
        value={[selectedConstructorItem?.opacity || 100]}
        defaultValue={[100]}
        min={1}
        max={100}
        step={1}
        className="w-full"
      />
    </div>
  );
};

export default ConstructorItemOpacity;
