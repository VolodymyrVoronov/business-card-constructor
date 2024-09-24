import { Stage, Layer, Rect, Text, Image } from "react-konva";
import { useRef, useState } from "react";
import { Stage as KonvaStage } from "konva/lib/Stage";
import { saveAs } from "file-saver";

import { Button } from "./components/ui/button";

import { ColorPicker, useColor } from "react-color-palette";
import "react-color-palette/css";

const App = () => {
  const bcRef = useRef<KonvaStage | null>(null);

  const [text, setText] = useState("Your Text Here");
  const [color, setColor] = useColor("#fffff");

  const exportAsPNG = () => {
    if (!bcRef.current) {
      return;
    }

    const dataURL = bcRef.current.toDataURL();
    const link = document.createElement("a");
    link.href = dataURL;
    link.download = "business_card.png";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const generateSVG = () => {
    if (!bcRef.current) {
      return;
    }

    const shapes = bcRef.current.find("Rect, Text"); // Find all shapes on the stage
    const width = bcRef.current.width();
    const height = bcRef.current.height();

    let svgContent = `
      <svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}">
    `;

    shapes.forEach((shape) => {
      if (shape.className === "Rect") {
        const attrs = shape.getAttrs();
        svgContent += `<rect x="${attrs.x}" y="${attrs.y}" width="${attrs.width}" height="${attrs.height}" fill="${attrs.fill}" />`;
      } else if (shape.className === "Text") {
        const attrs = shape.getAttrs();
        svgContent += `<text x="${attrs.x}" y="${attrs.y}" font-size="${attrs.fontSize}" fill="${attrs.fill}">${attrs.text}</text>`;
      }
    });

    svgContent += "</svg>";
    return svgContent;
  };

  const exportAsSVG = () => {
    if (!bcRef.current) {
      return;
    }

    const svgString = generateSVG();

    if (!svgString) {
      return;
    }

    const blob = new Blob([svgString], { type: "image/svg+xml;charset=utf-8" });
    saveAs(blob, "business_card.svg");
  };

  return (
    <div className="flex h-screen w-screen flex-col items-center">
      <div>Test</div>

      <div
        style={{
          color: color.hex,
        }}
      >
        <h1>Hello</h1>
      </div>

      <div
        className="size-10"
        style={{
          background: color.hex,
        }}
      ></div>

      <Stage
        ref={bcRef}
        width={1050}
        height={600}
        style={{ border: "1px solid black" }}
      >
        <Layer>
          <Rect x={0} y={0} width={1050} height={600} fill="cyan" />

          <Text
            text={text}
            x={50}
            y={50}
            fontSize={24}
            fill={color.hex}
            draggable
            onClick={(e) => console.log(e)}
          />
          <Rect
            x={100}
            y={150}
            width={150}
            height={100}
            fill="black"
            draggable
            onClick={(e) => console.log(e)}
          />
          <Rect
            x={120}
            y={120}
            width={25}
            height={25}
            fill="red"
            draggable
            // dragBoundFunc={(pos) => {
            //   return {
            //     x: Math.max(0, Math.min(300 - 150, pos.x)),
            //     y: Math.max(0, Math.min(300 - 100, pos.y)),
            //   };
            // }}
            onClick={(e) => console.log(e)}
          />
        </Layer>
      </Stage>

      <ColorPicker color={color} onChange={setColor} />

      <Button onClick={exportAsPNG}>Save as PNG</Button>

      <Button onClick={exportAsSVG}>Save as SVG</Button>
    </div>
  );
};

export default App;

