import { Redo, Undo } from "lucide-react";
import { cn } from "@/lib/utils";

import { useAppStore } from "@/store/app";

import { Button } from "./ui/button";

interface IRedoUndoButtonsProps {
  className?: string;
}

const RedoUndoButtons = ({ className }: IRedoUndoButtonsProps): JSX.Element => {
  const { undo, redo } = useAppStore.temporal.getState();

  const onUndoButtonClick = (): void => {
    undo();
  };

  const onRedoButtonClick = (): void => {
    redo();
  };

  return (
    <div className={cn("flex items-center justify-center gap-2", className)}>
      <Button
        onClick={onUndoButtonClick}
        type="button"
        size="icon"
        aria-label="Undo"
      >
        <Undo className="is" />

        <span className="sr-only">Undo</span>
      </Button>

      <Button
        onClick={onRedoButtonClick}
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
