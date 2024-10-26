import { Paintbrush } from "lucide-react";
import { ColorPicker as CP, type IColor } from "react-color-palette";
import "react-color-palette/css";
import { useShallow } from "zustand/react/shallow";

import { useAppStore } from "@/store/app";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "./ui/button";

const ColorPicker = () => {
  const [
    selectedColor,
    selectedId,
    selectedType,
    setSelectedColor,
    setConstructorItemBackgroundColor,
  ] = useAppStore(
    useShallow((state) => [
      state.selectedColor,
      state.selectedId,
      state.selectedType,
      state.setSelectedColor,
      state.setConstructorItemBackgroundColor,
    ]),
  );

  const onColorChange = (color: IColor) => {
    setSelectedColor(color);

    if (selectedId && selectedType === "rect") {
      setConstructorItemBackgroundColor(color);
    }
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button size="icon" variant="outline">
          <Paintbrush className="is" />
        </Button>
      </PopoverTrigger>

      <PopoverContent>
        <CP color={selectedColor} onChange={onColorChange} height={100} />
      </PopoverContent>
    </Popover>
  );
};

export default ColorPicker;
