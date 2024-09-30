import { ImageIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { ConstructorItemType } from "@/types";

import { Button } from "./ui/button";
import { Hint } from "./Hint";

interface IImageProps {
  className?: string;
  onClick: (type: ConstructorItemType) => void;
}

const Image = ({ className, onClick }: IImageProps) => {
  const onImageButtonClick = (): void => {
    onClick("rect");
  };

  return (
    <Hint label="Add image to the document">
      <Button
        className={cn(
          "bg-transparent transition hover:scale-110 hover:bg-transparent",
          className,
        )}
        onClick={onImageButtonClick}
        variant="ghost"
        size="icon"
      >
        <ImageIcon className="size-10" />
      </Button>
    </Hint>
  );
};

export default Image;
