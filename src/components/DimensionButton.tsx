import { Ruler } from "lucide-react";

import { useAppStore } from "@/store/app";

import { Button } from "./ui/button";
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
import { useShallow } from "zustand/react/shallow";
import { useEffect } from "react";

const DimensionButton = () => {
  const [dimension, setDimension] = useAppStore(
    useShallow((state) => [state.dimension, state.setDimension]),
  );

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

      <DialogContent className="max-w-[768px]">
        <DialogHeader>
          <DialogTitle>Dimensions</DialogTitle>
          <DialogDescription>
            Select the dimensions of your business card.
          </DialogDescription>
        </DialogHeader>

        <div>Test</div>

        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">I want to define my own</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default DimensionButton;
