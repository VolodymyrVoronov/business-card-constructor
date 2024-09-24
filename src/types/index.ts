import { CSSProperties } from "react";

export type Theme = "light" | "dark" | "system";

export type BusinessCard = {
  id: number;
  title: string;
  size: string;
  dpi: number;
  dimensions: {
    width: number;
    height: number;
  };
};
