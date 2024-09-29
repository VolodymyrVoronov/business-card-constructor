import { CSSProperties } from "react";

import { ImageConfig } from "konva/lib/shapes/Image";
import { TextConfig } from "konva/lib/shapes/Text";
import { CircleConfig } from "konva/lib/shapes/Circle";
import { RectConfig } from "konva/lib/shapes/Rect";
import { EllipseConfig } from "konva/lib/shapes/Ellipse";
import { RegularPolygonConfig } from "konva/lib/shapes/RegularPolygon";
import { StarConfig } from "konva/lib/shapes/Star";
import { ArcConfig } from "konva/lib/shapes/Arc";
import { PathConfig } from "konva/lib/shapes/Path";

export type Theme = "light" | "dark" | "system";

export type BusinessCard = {
  id: number;
  inMm: string;
  usedIn: string;
  dpis: {
    dpi: number;
    width: number;
    height: number;
  }[];
};

export interface ConstructorItem {
  id: number;
  x: number;
  y: number;
}

export interface ConstructorItemText extends TextConfig {
  type: "text";
}

export interface ConstructorItemImage extends ImageConfig {
  type: "image";
}

export interface ConstructorItemCircle extends CircleConfig {
  type: "circle";
}

export interface ConstructorItemReact extends RectConfig {
  type: "rect";
}

export interface ConstructorItemEllipse extends EllipseConfig {
  type: "ellipse";
}

export interface ConstructorItemRegularPolygon extends RegularPolygonConfig {
  type: "regular-polygon";
}

export interface ConstructorItemStar extends StarConfig {
  type: "star";
}

export interface ConstructorItemArc extends ArcConfig {
  type: "arc";
}

export interface ConstructorItemSVGPath extends PathConfig {
  type: "svg-path";
}
