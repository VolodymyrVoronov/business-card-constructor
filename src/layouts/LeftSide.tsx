import CollapsibleToolBox from "@/components/CollapsibleToolBox";
import Elements from "@/components/Elements";

const LeftSide = () => {
  return (
    <div className="border-r-[1px] border-black dark:border-slate-500">
      <CollapsibleToolBox title="Elements">
        <Elements />
      </CollapsibleToolBox>
    </div>
  );
};

export default LeftSide;
