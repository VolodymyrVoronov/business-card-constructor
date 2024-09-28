// import { temporal } from "zundo";
import { type IColor } from "react-color-palette";
import { create } from "zustand";
import { createJSONStorage, devtools, persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

export interface IAppStore {
  selectedColor: IColor;
  dimension: {
    width: number;
    height: number;
  };
}

export interface IAppActions {
  setSelectedColor: (color: IColor) => void;
  setDimension: (dimension: IAppStore["dimension"]) => void;
}

export const useAppStore = create(
  persist(
    devtools(
      immer<IAppStore & IAppActions>((set, get) => ({
        selectedColor: {
          hex: "#000000",
          hsv: { h: 0, s: 0, v: 0, a: 1 },
          rgb: { r: 0, g: 0, b: 0, a: 1 },
        },

        dimension: {
          width: 336,
          height: 193,
        },

        setSelectedColor: (color) => {
          set((state) => {
            state.selectedColor = color;
          });
        },

        setDimension: (dimension) => {
          set((state) => {
            state.dimension = dimension;
          });
        },
      })),
      // { limit: 50 },
    ),
    {
      name: "business-card-constructor-storage",
      storage: createJSONStorage(() => localStorage),
    },
  ),
);
