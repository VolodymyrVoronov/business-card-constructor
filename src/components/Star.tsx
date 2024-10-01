import { StarIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { ConstructorItemType } from "@/types";

import { Button } from "./ui/button";
import { Hint } from "./Hint";

interface IStarProps {
  className?: string;
  onClick: (type: ConstructorItemType) => void;
}

const Star = ({ className, onClick }: IStarProps) => {
  const onStarButtonClick = (): void => {
    onClick("star");
  };

  return (
    <Hint label="Star">
      <Button
        className={cn(
          "bg-transparent transition hover:scale-110 hover:bg-transparent",
          className,
        )}
        onClick={onStarButtonClick}
        variant="ghost"
        size="icon"
      >
        <StarIcon className="size-10" />
      </Button>
    </Hint>
  );
};

export default Star;
