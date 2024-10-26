import { cn } from "@/lib/utils";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "./ui/button";

interface IBusinessCardProps {
  cardData: {
    id: number;
    title: string;
    size: string;
    dpi: number;
    dimensions: { width: number; height: number };
  };
  className?: string;
}

const BusinessCard = ({ cardData, className }: IBusinessCardProps) => {
  const { title, size, dpi, dimensions } = cardData;

  return (
    <Card className={cn("rounded-none", className)}>
      <CardHeader>
        <Popover>
          <PopoverTrigger>
            <CardTitle className="truncate text-left hover:text-[#7a3cef]">
              {title}
            </CardTitle>
            <PopoverContent align="start" className="shadow-2xl">
              {title}
            </PopoverContent>
          </PopoverTrigger>
        </Popover>

        <CardDescription>Size: {size}</CardDescription>
        <CardDescription>DPI: {dpi}</CardDescription>
      </CardHeader>
      <CardContent>
        Dimensions: {dimensions.width} x {dimensions.height}
      </CardContent>
      <CardFooter>
        <Button>Select</Button>
      </CardFooter>
    </Card>
  );
};

export default BusinessCard;
