import { CaseSensitive } from "lucide-react";

import { cn } from "@/lib/utils";
import { ConstructorItemType } from "@/types";

import { Button } from "./ui/button";
import { Hint } from "./Hint";

interface ITextProps {
  className?: string;
  onClick: (type: ConstructorItemType) => void;
}

const Text = ({ className, onClick }: ITextProps) => {
  const onTextButtonClick = (): void => {
    onClick("text");
  };

  return (
    <Hint label="Text">
      <Button
        className={cn(
          "bg-transparent transition hover:scale-110 hover:bg-transparent",
          className,
        )}
        onClick={onTextButtonClick}
        variant="ghost"
        size="icon"
      >
        <CaseSensitive className="size-10 dark:text-slate-500" />
      </Button>
    </Hint>
  );
};

export default Text;
