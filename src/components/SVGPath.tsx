import { ChangeEvent } from "react";
import { useShallow } from "zustand/react/shallow";

import { useAppStore } from "@/store/app";

import { Textarea } from "@/components/ui/textarea";

const SVGPath = () => {
  const [selectedId, selectedType, constructorItems, updateConstructorItems] =
    useAppStore(
      useShallow((state) => [
        state.selectedId,
        state.selectedType,
        state.constructorItems,
        state.updateConstructorItems,
      ]),
    );

  if (!selectedId && selectedType === "svg-path") {
    return null;
  } else if (selectedType !== "svg-path") {
    return null;
  }

  const selectedConstructorItem = constructorItems
    ? constructorItems.find((item) => item.itemId === selectedId)
    : null;

  const onSVGPathChange = (e: ChangeEvent<HTMLTextAreaElement>): void => {
    if (selectedConstructorItem) {
      const newItem = {
        ...selectedConstructorItem,
        data: e.target.value,
      };

      updateConstructorItems([
        ...constructorItems.filter((item) => item.itemId !== selectedId),
        newItem,
      ]);
    }
  };

  return (
    <div className="flex flex-col gap-y-2 border-b-[1px] border-black p-2 dark:border-slate-500">
      <span className="text-center text-sm font-semibold">SVG Path</span>

      <div className="flex flex-col gap-3">
        <Textarea
          className="min-h-[100px] w-full cursor-pointer bg-transparent"
          value={selectedConstructorItem?.data ?? 0}
          onChange={onSVGPathChange}
        />
      </div>
    </div>
  );
};

export default SVGPath;
