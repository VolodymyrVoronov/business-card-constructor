import { CSSProperties } from "react";

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
