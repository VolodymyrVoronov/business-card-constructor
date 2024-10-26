import { useShallow } from "zustand/react/shallow";

import { useAppStore } from "@/store/app";

import ColorPicker from "./ColorPicker";

const ElementColors = () => {
  const [selectedId] = useAppStore(useShallow((state) => [state.selectedId]));

  if (!selectedId) {
    return null;
  }

  return (
    <div className="flex flex-col gap-y-2 border-b-[1px] border-black p-2 dark:border-slate-500">
      <span className="text-center text-sm font-semibold">Colors</span>

      <div className="flex gap-x-2">
        <ColorPicker />
      </div>
    </div>
  );
};

export default ElementColors;
