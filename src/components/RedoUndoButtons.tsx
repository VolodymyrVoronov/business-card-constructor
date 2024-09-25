import { Redo, Undo } from "lucide-react";
import { cn } from "@/lib/utils";

// import { useAppStore } from "@/store/app";

import { Button } from "./ui/button";

interface RedoUndoButtonsProps {
  className?: string;
}

const RedoUndoButtons = ({ className }: RedoUndoButtonsProps): JSX.Element => {
  // const { undo, redo } = useAppStore.temporal.getState();

  // const onUndoButtonClick = (): void => {
  //   undo();
  // };

  // const onRedoButtonClick = (): void => {
  //   redo();
  // };

  return (
    <div className={cn("flex items-center justify-center gap-2", className)}>
      <Button
        // onPress={onUndoButtonClick}
        type="button"
        size="icon"
        aria-label="Undo"
      >
        <Undo className="is" />

        <span className="sr-only">Undo</span>
      </Button>

      <Button
        // onPress={onRedoButtonClick}
        type="button"
        size="icon"
        aria-label="Redo"
      >
        <Redo className="is" />

        <span className="sr-only">Redo</span>
      </Button>
    </div>
  );
};

export default RedoUndoButtons;
