import Circle from "./Circle";
import Ellipse from "./Ellipse";
import Image from "./Image";
import Rectangle from "./Rectangle";
import RegularPolygon from "./RegularPolygon";
import Star from "./Star";
import Text from "./Text";

const Elements = () => {
  const onTextButtonClick = (): void => {
    console.log("text");
  };

  const onRectangleButtonClick = (): void => {
    console.log("rect");
  };

  const onCircleButtonClick = (): void => {
    console.log("circle");
  };

  const onEllipseButtonClick = (): void => {
    console.log("ellipse");
  };

  const onRegularPolygonButtonClick = (): void => {
    console.log("regular polygon");
  };

  const onStarButtonClick = (): void => {
    console.log("star");
  };

  const onImageButtonClick = (): void => {
    console.log("image");
  };

  return (
    <div className="flex flex-row flex-wrap gap-2 py-1">
      <Text onClick={onTextButtonClick} />
      <Rectangle onClick={onRectangleButtonClick} />
      <Circle onClick={onCircleButtonClick} />
      <Ellipse onClick={onEllipseButtonClick} />
      <RegularPolygon onClick={onRegularPolygonButtonClick} />
      <Star onClick={onStarButtonClick} />
      <Image onClick={onImageButtonClick} />
    </div>
  );
};

export default Elements;
