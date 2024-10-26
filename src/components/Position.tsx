import { BringToFront, SendToBack } from "lucide-react";
import { useShallow } from "zustand/react/shallow";

import { useAppStore } from "@/store/app";

import { Hint } from "./Hint";
import { Button } from "./ui/button";

const Position = () => {
  const [selectedId, constructorItems, updateConstructorItems] = useAppStore(
    useShallow((state) => [
      state.selectedId,
      state.constructorItems,
      state.updateConstructorItems,
    ]),
  );

  if (!selectedId) {
    return null;
  }

  const selectedConstructorItem = constructorItems
    ? constructorItems.find((item) => item.itemId === selectedId)
    : null;

  const onToFrontButtonClick = (): void => {
    if (selectedConstructorItem) {
      const newItem = {
        ...selectedConstructorItem,
        zIndex: selectedConstructorItem.zIndex + 1,
      };

      updateConstructorItems([
        ...constructorItems.filter((item) => item.itemId !== selectedId),
        newItem,
      ]);
    }
  };

  const onToBackButtonClick = (): void => {
    if (selectedConstructorItem) {
      const newItem = {
        ...selectedConstructorItem,
        zIndex: selectedConstructorItem.zIndex - 1,
      };

      updateConstructorItems([
        ...constructorItems.filter((item) => item.itemId !== selectedId),
        newItem,
      ]);
    }
  };

  return (
    <div className="flex flex-col gap-y-2 border-b-[1px] border-black p-2 dark:border-slate-500">
      <span className="text-center text-sm font-semibold">Position</span>

      <div className="flex gap-x-2">
        <Hint label="Bring to front">
          <Button
            type="button"
            size="icon"
            onClick={onToFrontButtonClick}
            variant="outline"
          >
            <BringToFront className="is" />

            <span className="sr-only">Bring to front</span>
          </Button>
        </Hint>

        <Hint label="Send to back">
          <Button
            type="button"
            size="icon"
            onClick={onToBackButtonClick}
            variant="outline"
          >
            <SendToBack className="is" />

            <span className="sr-only">Send to back</span>
          </Button>
        </Hint>
      </div>
    </div>
  );
};

export default Position;
