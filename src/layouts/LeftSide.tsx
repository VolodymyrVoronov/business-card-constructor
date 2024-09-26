import CollapsibleToolBox from "@/components/CollapsibleToolBox";

const LeftSide = () => {
  return (
    <div className="border-r-[1px] border-black dark:border-slate-500">
      <CollapsibleToolBox title="Figures">
        <div>1</div>
        <div>2</div>
        <div>3</div>
      </CollapsibleToolBox>
    </div>
  );
};

export default LeftSide;
