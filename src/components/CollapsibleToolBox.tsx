import { ReactNode } from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface ICollapsibleToolBoxProps {
  title: string;
  className?: string;
  children: ReactNode;
}

const CollapsibleToolBox = ({
  title,
  className,
  children,
}: ICollapsibleToolBoxProps) => {
  return (
    <Accordion
      type="single"
      collapsible
      defaultValue="item-1"
      className={className}
    >
      <AccordionItem
        value="item-1"
        className="border-black border-b-[1] dark:border-slate-500"
      >
        <AccordionTrigger className="p-0 px-2 pb-2 text-sm font-semibold">
          {title}
        </AccordionTrigger>
        <AccordionContent className="px-2">{children}</AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default CollapsibleToolBox;
