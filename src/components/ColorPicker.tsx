import { Paintbrush } from "lucide-react";
import { ColorPicker as CP } from "react-color-palette";
import "react-color-palette/css";
import { useShallow } from "zustand/react/shallow";

import { useAppStore } from "@/store/app";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Hint } from "./Hint";
import { Button } from "./ui/button";

const ColorPicker = () => {
  const [selectedColor, setSelectedColor] = useAppStore(
    useShallow((state) => [state.selectedColor, state.setSelectedColor]),
  );

  return (
    <Popover>
      <Hint label="Color Picker">
        <PopoverTrigger asChild>
          <Button size="icon" variant="outline">
            <Paintbrush className="is" />
          </Button>
        </PopoverTrigger>
      </Hint>

      <PopoverContent>
        <CP color={selectedColor} onChange={setSelectedColor} height={100} />
      </PopoverContent>
    </Popover>
  );
};

export default ColorPicker;
