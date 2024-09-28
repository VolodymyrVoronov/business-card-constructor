import { BUSINESS_CARDS } from "@/constants";

import DimensionSelectorCard from "./DimensionSelectorCard";

interface IDimensionSelectorProps {
  onSelect: ({ width, height }: { width: number; height: number }) => void;
}

const DimensionSelector = ({ onSelect }: IDimensionSelectorProps) => {
  return (
    <div className="grid grid-cols-[1fr] gap-1.5 md:grid-cols-[1fr_1fr] md:gap-2">
      {BUSINESS_CARDS.map((card) => (
        <DimensionSelectorCard
          key={card.id}
          card={card}
          onSelect={({ width, height }) => {
            onSelect({ width, height });
          }}
        />
      ))}
    </div>
  );
};

export default DimensionSelector;
