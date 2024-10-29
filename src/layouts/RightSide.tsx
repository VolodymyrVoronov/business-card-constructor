import Actions from "@/components/Actions";
import Border from "@/components/Border";
import ConstructorItemOpacity from "@/components/ConstructorItemOpacity";
import Dimension from "@/components/Dimension";
import ElementColors from "@/components/ElementColors";
import ImageUploader from "@/components/ImageUploader";
import Positions from "@/components/Positions";
import Radius from "@/components/Radius";
import Shadow from "@/components/Shadow";

const RightSide = () => {
  return (
    <div className="h-auto overflow-auto border-l-[1px] border-black dark:border-slate-500">
      <Dimension />
      <Actions />
      <Positions />
      <ElementColors />
      <Radius />
      <Border />
      <ImageUploader />
      <ConstructorItemOpacity />
      <Shadow />
    </div>
  );
};

export default RightSide;
