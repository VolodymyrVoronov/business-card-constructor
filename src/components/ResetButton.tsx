import { RotateCcw } from "lucide-react";

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
import { Button } from "./ui/button";

const ResetButton = () => {
  const onResetButtonClick = (): void => {
    console.log("Reset button clicked");
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button type="button" size="icon" aria-label="Reset all">
          <RotateCcw className="isc" />

          <span className="sr-only">Reset all</span>
        </Button>
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>Are you sure you want to reset all?</DialogTitle>
          <DialogDescription>This action cannot be undone.</DialogDescription>
        </DialogHeader>

        <DialogFooter className="pt-2">
          <DialogClose asChild>
            <Button variant="outline">Not yet</Button>
          </DialogClose>

          <DialogClose asChild>
            <Button onClick={onResetButtonClick}>Yes, reset all</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ResetButton;
