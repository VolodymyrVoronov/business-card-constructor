import { Ruler } from "lucide-react";
import { useShallow } from "zustand/react/shallow";

import { useToast } from "@/hooks/use-toast";
import { useAppStore } from "@/store/app";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import DimensionSelector from "./DimensionSelector";
import { Button } from "./ui/button";

const DimensionButton = () => {
  const [setDimension] = useAppStore(
    useShallow((state) => [state.setDimension]),
  );

  const { toast } = useToast();

  const onDimensionSelect = ({
    width,
    height,
  }: {
    width: number;
    height: number;
  }): void => {
    toast({
      title: "Dimension selected successfully",
      description: (
        <span className="text-lg">
          Width: <span className="font-semibold">{width}px</span> : Height:{" "}
          <span className="font-semibold">{height}px</span>
        </span>
      ),
    });

    setDimension({
      width,
      height,
    });
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          type="button"
          size="icon"
          aria-label="Dimension"
          variant="outline"
        >
          <Ruler className="is" />

          <span className="sr-only">Dimension</span>
        </Button>
      </DialogTrigger>

      <DialogContent className="max-h-full max-w-[768px] overflow-auto sm:rounded-none md:rounded-lg">
        <DialogHeader>
          <DialogTitle>Dimension</DialogTitle>
          <DialogDescription>
            Select the dimension of your business card.
          </DialogDescription>
        </DialogHeader>

        <DimensionSelector onSelect={onDimensionSelect} />

        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">Close</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default DimensionButton;
