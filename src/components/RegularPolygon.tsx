import { Triangle } from "lucide-react";

import { cn } from "@/lib/utils";
import { ConstructorItemType } from "@/types";

import { Button } from "./ui/button";
import { Hint } from "./Hint";

interface IRegularPolygonProps {
  className?: string;
  onClick: (type: ConstructorItemType) => void;
}

const RegularPolygon = ({ className, onClick }: IRegularPolygonProps) => {
  const onRegularPolygonButtonClick = (): void => {
    onClick("regular-polygon");
  };

  return (
    <Hint label="Polygon">
      <Button
        className={cn(
          "bg-transparent transition hover:scale-110 hover:bg-transparent",
          className,
        )}
        onClick={onRegularPolygonButtonClick}
        variant="ghost"
        size="icon"
      >
        <Triangle className="size-10" />
      </Button>
    </Hint>
  );
};

export default RegularPolygon;
