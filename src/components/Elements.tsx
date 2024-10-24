import { useShallow } from "zustand/react/shallow";

import generateRandomUUID from "@/helpers/generateRandomUUID";
import { useAppStore } from "@/store/app";
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
  const [addConstructorItem] = useAppStore(
    useShallow((state) => [state.addConstructorItem]),
  );

  const onElementButtonClick = (type: ConstructorItemType): void => {
    if (type === "text") {
      addConstructorItem({
        itemId: generateRandomUUID(),
        type: "text",
        text: "Text",
        x: 0,
        y: 0,
        isSelected: false,
      });
    }

    if (type === "image") {
      addConstructorItem({
        itemId: generateRandomUUID(),
        type: "image",
        image: undefined,
        x: 0,
        y: 0,
        isSelected: false,
      });
    }

    if (type === "svg-path") {
      addConstructorItem({
        itemId: generateRandomUUID(),
        type: "svg-path",
        path: "",
        x: 0,
        y: 0,
        isSelected: false,
      });
    }

    if (type === "regular-polygon") {
      addConstructorItem({
        itemId: generateRandomUUID(),
        type: "regular-polygon",
        sides: 3,
        radius: 50,
        x: 0,
        y: 0,
        isSelected: false,
      });
    }

    if (type === "arc") {
      addConstructorItem({
        itemId: generateRandomUUID(),
        type: "arc",
        x: 0,
        y: 0,
        innerRadius: 50,
        outerRadius: 100,
        angle: 360,
        isSelected: false,
      });
    }

    if (type === "line") {
      addConstructorItem({
        itemId: generateRandomUUID(),
        type: "line",
        points: [20, 0, 200, 0],
        isSelected: false,
      });
    }

    if (type === "star") {
      addConstructorItem({
        itemId: generateRandomUUID(),
        type: "star",
        x: 0,
        y: 0,
        numPoints: 5,
        innerRadius: 30,
        outerRadius: 50,
        isSelected: false,
      });
    }

    if (type === "circle") {
      addConstructorItem({
        itemId: generateRandomUUID(),
        type: "circle",
        x: 0,
        y: 0,
        radius: 50,
        isSelected: false,
      });
    }

    if (type === "ellipse") {
      addConstructorItem({
        itemId: generateRandomUUID(),
        type: "ellipse",
        x: 0,
        y: 0,
        radiusX: 70,
        radiusY: 40,
        isSelected: false,
      });
    }

    if (type === "rect") {
      addConstructorItem({
        itemId: generateRandomUUID(),
        type: "rect",
        x: 0,
        y: 0,
        width: 100,
        height: 50,
        isSelected: false,
      });
    }
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
