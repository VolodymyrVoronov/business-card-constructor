import { ReactNode } from "react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { DialogClose } from "@radix-ui/react-dialog";

export const useConfirm = (options: {
  dialogTrigger: ReactNode;
  title: string;
  message: string;
  cancelText: string;
  confirmTrigger: ReactNode;
}): [() => JSX.Element] => {
  const { dialogTrigger, title, message, cancelText, confirmTrigger } = options;

  const ConfirmDialog = () => (
    <Dialog>
      <DialogTrigger asChild>{dialogTrigger}</DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{message}</DialogDescription>
        </DialogHeader>

        <DialogFooter className="pt-2">
          <DialogClose asChild>
            <Button variant="outline">{cancelText}</Button>
          </DialogClose>

          <DialogClose asChild>{confirmTrigger}</DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );

  return [ConfirmDialog];
};
