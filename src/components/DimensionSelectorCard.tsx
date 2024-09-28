import { useShallow } from "zustand/react/shallow";

import { useAppStore } from "@/store/app";
import { BusinessCard } from "@/types";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "./ui/button";

interface IDimensionSelectorCardProps {
  card: BusinessCard;

  onSelect: ({ width, height }: { width: number; height: number }) => void;
}

const DimensionSelectorCard = ({
  card,
  onSelect,
}: IDimensionSelectorCardProps) => {
  const { inMm, usedIn, dpis } = card;

  const [dimension] = useAppStore(useShallow((state) => [state.dimension]));

  const onCardSelectClick = ({
    width,
    height,
  }: {
    width: number;
    height: number;
  }): void => {
    onSelect({ width, height });
  };

  return (
    <Card className="flex flex-col justify-between md:shadow-md">
      <CardHeader>
        <CardTitle>{inMm}</CardTitle>
        <CardDescription className="flex flex-col gap-y-1">
          <span className="font-semibold">
            Usually used is the following countries:
          </span>
          <span className="italic">{usedIn}</span>
        </CardDescription>
      </CardHeader>

      <CardContent className="flex gap-2">
        {dpis.map((dpi) => (
          <Button
            key={dpi.dpi}
            className={"w-full"}
            variant={
              dimension?.width === dpi.width && dimension?.height === dpi.height
                ? "default"
                : "outline"
            }
            onClick={() =>
              onCardSelectClick({ width: dpi.width, height: dpi.height })
            }
          >
            {`${dpi.width}px x ${dpi.height}px`}
          </Button>
        ))}
      </CardContent>
    </Card>
  );
};

export default DimensionSelectorCard;
