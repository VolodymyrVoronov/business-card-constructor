import { RotateCcw } from "lucide-react";

import { useConfirm } from "@/hooks/useConfirm";

import { Button } from "./ui/button";

const ResetButton = () => {
  const [ConfirmDialog] = useConfirm({
    dialogTrigger: (
      <Button type="button" size="icon" aria-label="Reset all">
        <RotateCcw className="isc" />
      </Button>
    ),
    title: "Are you sure you want to reset all?",
    message: "This action cannot be undone.",
    cancelText: "Not yet",
    confirmTrigger: (
      <Button onClick={onResetButtonClick}>Yes, reset all</Button>
    ),
  });

  function onResetButtonClick() {
    console.log("Reset button clicked");
  }

  return <ConfirmDialog />;
};

export default ResetButton;
