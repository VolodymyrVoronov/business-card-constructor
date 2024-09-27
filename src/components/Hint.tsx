"use client";

import { ReactNode } from "react";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface IHintProps {
  label: string;
  side?: "top" | "bottom" | "left" | "right";
  align?: "start" | "center" | "end";
  triggerContainerClassName?: string;
  children: ReactNode;
}

export const Hint = ({
  label,
  side = "top",
  align = "start",
  triggerContainerClassName,
  children,
}: IHintProps) => {
  return (
    <TooltipProvider>
      <Tooltip delayDuration={50}>
        <TooltipTrigger asChild className={triggerContainerClassName}>
          {children}
        </TooltipTrigger>

        <TooltipContent
          side={side}
          align={align}
          className="border border-white/5 bg-black text-white"
        >
          <p className="text-xs font-medium">{label}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};
