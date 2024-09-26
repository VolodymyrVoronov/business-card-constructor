import { ColorPicker as CP } from "react-color-palette";
import "react-color-palette/css";
import { useShallow } from "zustand/react/shallow";

import { useAppStore } from "@/store/app";

const ColorPicker = () => {
  const [selectedColor, setSelectedColor] = useAppStore(
    useShallow((state) => [state.selectedColor, state.setSelectedColor]),
  );

  return (
    <div className="w-full">
      <CP color={selectedColor} onChange={setSelectedColor} height={100} />
    </div>
  );
};

export default ColorPicker;
