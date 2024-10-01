import { ConstructorItemType } from "@/types";

import Arc from "./Arc";
import Circle from "./Circle";
import Ellipse from "./Ellipse";
import Image from "./Image";
import Line from "./Line";
import Path from "./Path";
import Rectangle from "./Rectangle";
import RegularPolygon from "./RegularPolygon";
import Star from "./Star";
import Text from "./Text";

const Elements = () => {
  const onElementButtonClick = (type: ConstructorItemType): void => {
    console.log("Element button clicked", type);
  };

  return (
    <div className="flex flex-col gap-y-2 border-b-[1px] border-black p-2 dark:border-slate-500">
      <span className="text-center text-sm font-semibold">Elements</span>

      <div className="flex flex-row flex-wrap gap-2 py-1">
        <Text onClick={onElementButtonClick} />
        <Rectangle onClick={onElementButtonClick} />
        <Circle onClick={onElementButtonClick} />
        <Ellipse onClick={onElementButtonClick} />
        <RegularPolygon onClick={onElementButtonClick} />
        <Arc onClick={onElementButtonClick} />
        <Star onClick={onElementButtonClick} />
        <Image onClick={onElementButtonClick} />
        <Path onClick={onElementButtonClick} />
        <Line onClick={onElementButtonClick} />
      </div>
    </div>
  );
};

export default Elements;
