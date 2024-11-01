import { Square } from "lucide-react";

import { cn } from "@/lib/utils";
import { ConstructorItemType } from "@/types";

import { Button } from "./ui/button";
import { Hint } from "./Hint";

interface IRectangleProps {
  className?: string;
  onClick: (type: ConstructorItemType) => void;
}

const Rectangle = ({ className, onClick }: IRectangleProps) => {
  const onRectangleButtonClick = (): void => {
    onClick("rect");
  };

  return (
    <Hint label="Rectangle">
      <Button
        className={cn(
          "bg-transparent transition hover:scale-110 hover:bg-transparent",
          className,
        )}
        onClick={onRectangleButtonClick}
        variant="ghost"
        size="icon"
      >
        <Square className="size-10 dark:text-slate-500" />
      </Button>
    </Hint>
  );
};

export default Rectangle;
