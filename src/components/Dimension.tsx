import { useAppStore } from "@/store/app";
import { useShallow } from "zustand/react/shallow";

import DimensionButton from "./DimensionButton";

import { Input } from "@/components/ui/input";
import { ChangeEvent } from "react";

const Dimension = () => {
  const [dimension, setDimension] = useAppStore(
    useShallow((state) => [state.dimension, state.setDimension]),
  );

  const onWidthChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const width = e.target.valueAsNumber ?? 0;

    setDimension({
      width,
      height: dimension.height,
    });
  };

  const onHeightChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const height = e.target.valueAsNumber ?? 0;

    setDimension({
      width: dimension.width,
      height,
    });
  };

  return (
    <div className="flex flex-col gap-y-2">
      <span className="text-center text-sm font-semibold">Dimensions</span>

      <div className="grid grid-cols-[auto_1fr] items-end gap-2">
        <div className="grid grid-cols-2 gap-2">
          <div>
            <span className="text-sm">Width</span>
            <Input
              type="number"
              min={0}
              value={dimension.width}
              onChange={onWidthChange}
            />
          </div>
          <div>
            <span className="text-sm">Height</span>
            <Input
              type="number"
              min={0}
              value={dimension.height}
              onChange={onHeightChange}
            />
          </div>
        </div>

        <DimensionButton />
      </div>
    </div>
  );
};

export default Dimension;
