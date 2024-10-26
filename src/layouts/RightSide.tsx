import Dimension from "@/components/Dimension";
import ElementColor from "@/components/ElementColor";
import Position from "@/components/Position";

const RightSide = () => {
  return (
    <div className="h-auto overflow-auto border-l-[1px] border-black dark:border-slate-500">
      <Dimension />
      <Position />
      <ElementColor />
    </div>
  );
};

export default RightSide;
