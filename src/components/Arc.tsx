import { Disc } from "lucide-react";

import { cn } from "@/lib/utils";
import { ConstructorItemType } from "@/types";

import { Button } from "./ui/button";
import { Hint } from "./Hint";

interface IArcProps {
  className?: string;
  onClick: (type: ConstructorItemType) => void;
}

const Arc = ({ className, onClick }: IArcProps) => {
  const onArcButtonClick = (): void => {
    onClick("arc");
  };

  return (
    <Hint label="Arc">
      <Button
        className={cn(
          "bg-transparent transition hover:scale-110 hover:bg-transparent",
          className,
        )}
        onClick={onArcButtonClick}
        variant="ghost"
        size="icon"
      >
        <Disc className="size-10 dark:text-slate-500" />
      </Button>
    </Hint>
  );
};

export default Arc;
