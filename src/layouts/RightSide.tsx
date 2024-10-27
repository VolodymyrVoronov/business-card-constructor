import Actions from "@/components/Actions";
import Dimension from "@/components/Dimension";
import ElementColors from "@/components/ElementColors";
import Positions from "@/components/Positions";
import Radius from "@/components/Radius";

const RightSide = () => {
  return (
    <div className="h-auto overflow-auto border-l-[1px] border-black dark:border-slate-500">
      <Dimension />
      <Actions />
      <Positions />
      <ElementColors />
      <Radius />
    </div>
  );
};

export default RightSide;
