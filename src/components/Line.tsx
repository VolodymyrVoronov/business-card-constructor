import { Minus } from "lucide-react";

import { cn } from "@/lib/utils";
import { ConstructorItemType } from "@/types";

import { Button } from "./ui/button";
import { Hint } from "./Hint";

interface ILineProps {
  className?: string;
  onClick: (type: ConstructorItemType) => void;
}

const Line = ({ className, onClick }: ILineProps) => {
  const onLineButtonClick = (): void => {
    onClick("line");
  };

  return (
    <Hint label="Line">
      <Button
        className={cn(
          "bg-transparent transition hover:scale-110 hover:bg-transparent",
          className,
        )}
        onClick={onLineButtonClick}
        variant="ghost"
        size="icon"
      >
        <Minus className="size-10 dark:text-slate-500" />
      </Button>
    </Hint>
  );
};

export default Line;
