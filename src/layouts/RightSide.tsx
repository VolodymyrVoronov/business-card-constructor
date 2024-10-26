import Dimension from "@/components/Dimension";
import Position from "@/components/Position";

const RightSide = () => {
  return (
    <div className="h-auto overflow-auto border-l-[1px] border-black dark:border-slate-500">
      <Dimension />
      <Position />
    </div>
  );
};

export default RightSide;
