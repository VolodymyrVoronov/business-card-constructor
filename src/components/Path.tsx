import { Route } from "lucide-react";

import { cn } from "@/lib/utils";
import { ConstructorItemType } from "@/types";

import { Button } from "./ui/button";
import { Hint } from "./Hint";

interface IPathProps {
  className?: string;
  onClick: (type: ConstructorItemType) => void;
}

const Path = ({ className, onClick }: IPathProps) => {
  const onPathButtonClick = (): void => {
    onClick("svg-path");
  };

  return (
    <Hint label="Path (SVG)">
      <Button
        className={cn(
          "bg-transparent transition hover:scale-110 hover:bg-transparent",
          className,
        )}
        onClick={onPathButtonClick}
        variant="ghost"
        size="icon"
      >
        <Route className="size-10" />
      </Button>
    </Hint>
  );
};

export default Path;
