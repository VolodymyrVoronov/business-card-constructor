import { Egg } from "lucide-react";

import { cn } from "@/lib/utils";
import { ConstructorItemType } from "@/types";

import { Button } from "./ui/button";
import { Hint } from "./Hint";

interface IEllipseProps {
  className?: string;
  onClick: (type: ConstructorItemType) => void;
}

const Ellipse = ({ className, onClick }: IEllipseProps) => {
  const onEllipseButtonClick = (): void => {
    onClick("ellipse");
  };

  return (
    <Hint label="Ellipse">
      <Button
        className={cn(
          "bg-transparent transition hover:scale-110 hover:bg-transparent",
          className,
        )}
        onClick={onEllipseButtonClick}
        variant="ghost"
        size="icon"
      >
        <Egg className="size-10 rotate-90" />
      </Button>
    </Hint>
  );
};

export default Ellipse;
