import { Paintbrush, PaintBucket } from "lucide-react";
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

interface IColorPickerProps {
  icon?: "fill" | "brush";
}

const ColorPicker = ({ icon = "fill" }: IColorPickerProps) => {
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

    if (
      selectedId &&
      (selectedType === "rect" ||
        selectedType === "circle" ||
        selectedType === "ellipse" ||
        selectedType === "regular-polygon")
    ) {
      setConstructorItemBackgroundColor(color);
    }
  };

  const icons = {
    fill: <PaintBucket className="is" />,
    brush: <Paintbrush className="is" />,
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button size="icon" variant="outline">
          {icons[icon]}
        </Button>
      </PopoverTrigger>

      <PopoverContent>
        <CP color={selectedColor} onChange={onColorChange} height={100} />
      </PopoverContent>
    </Popover>
  );
};

export default ColorPicker;
