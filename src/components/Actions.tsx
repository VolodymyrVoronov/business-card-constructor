import { Copy, Trash2 } from "lucide-react";
import { useShallow } from "zustand/react/shallow";

import generateRandomUUID from "@/helpers/generateRandomUUID";
import { useAppStore } from "@/store/app";

import { Hint } from "./Hint";
import { Button } from "./ui/button";

const Actions = () => {
  const [
    selectedId,
    constructorItems,
    deleteConstructorItem,
    updateConstructorItems,
  ] = useAppStore(
    useShallow((state) => [
      state.selectedId,
      state.constructorItems,
      state.deleteConstructorItem,
      state.updateConstructorItems,
    ]),
  );

  if (!selectedId) {
    return null;
  }

  const selectedConstructorItem = constructorItems
    ? constructorItems.find((item) => item.itemId === selectedId)
    : null;

  const onDeleteButtonClick = (): void => {
    deleteConstructorItem(selectedId);
  };

  const onDuplicateButtonClick = (): void => {
    if (selectedConstructorItem) {
      const duplicatedItem = {
        ...selectedConstructorItem,
        itemId: generateRandomUUID(),
        x: 0,
        y: 0,
      };

      const newItems = [...constructorItems, duplicatedItem];
      updateConstructorItems(newItems);
    }
  };

  return (
    <div className="flex flex-col gap-y-2 border-b-[1px] border-black p-2 dark:border-slate-500">
      <span className="text-center text-sm font-semibold">Actions</span>

      <div className="flex gap-x-2">
        <Hint label="Duplicate">
          <Button
            type="button"
            size="icon"
            onClick={onDuplicateButtonClick}
            variant="outline"
          >
            <Copy className="is" />

            <span className="sr-only">Duplicate</span>
          </Button>
        </Hint>

        <Hint label="Delete">
          <Button
            type="button"
            size="icon"
            onClick={onDeleteButtonClick}
            variant="outline"
          >
            <Trash2 className="is" />

            <span className="sr-only">Delete</span>
          </Button>
        </Hint>
      </div>
    </div>
  );
};

export default Actions;
