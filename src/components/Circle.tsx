import { CircleIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { ConstructorItemType } from "@/types";

import { Button } from "./ui/button";
import { Hint } from "./Hint";

interface ICircleProps {
  className?: string;
  onClick: (type: ConstructorItemType) => void;
}

const Circle = ({ className, onClick }: ICircleProps) => {
  const onCircleButtonClick = (): void => {
    onClick("rect");
  };

  return (
    <Hint label="Add circle to the document">
      <Button
        className={cn(
          "bg-transparent transition hover:scale-110 hover:bg-transparent",
          className,
        )}
        onClick={onCircleButtonClick}
        variant="ghost"
        size="icon"
      >
        <CircleIcon className="size-10" />
      </Button>
    </Hint>
  );
};

export default Circle;
