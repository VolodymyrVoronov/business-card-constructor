// import { temporal } from "zundo";
import { ConstructorItem, ConstructorItemType } from "@/types";
import { produce } from "immer";
import { type IColor } from "react-color-palette";
import { create } from "zustand";
import { createJSONStorage, devtools, persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

export interface IAppStore {
  selectedColor: IColor;
  selectedId: string;
  selectedType: ConstructorItemType | undefined;
  dimension: {
    width: number;
    height: number;
  };
  constructorItems: ConstructorItem[];
}

export interface IAppActions {
  setSelectedColor: (color: IColor) => void;
  setSelectedId: (id: string) => void;
  setSelectedType: (type: ConstructorItemType) => void;
  setDimension: (dimension: IAppStore["dimension"]) => void;
  addConstructorItem: (item: ConstructorItem) => void;
  updateConstructorItems: (items: ConstructorItem[]) => void;
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

        selectedId: "",
        selectedType: undefined,

        dimension: {
          width: 336,
          height: 193,
        },

        constructorItems: [],

        setSelectedColor: (color) => {
          set((state) => {
            state.selectedColor = color;
          });
        },

        setSelectedId: (id) => {
          set((state) => {
            state.selectedId = id;
          });
        },

        setSelectedType: (type) => {
          set((state) => {
            state.selectedType = type;
          });
        },

        setDimension: (dimension) => {
          set((state) => {
            state.dimension = dimension;
          });
        },

        addConstructorItem: (item) => {
          const newItem: ConstructorItem = {
            ...item,
            isSelected: false,
            fill: get().selectedColor.hex,
          };

          set(
            produce((state) => {
              state.constructorItems.push(newItem);
            }),
          );
        },

        updateConstructorItems: (items) => {
          set(
            produce((state) => {
              state.constructorItems = items;
            }),
          );
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
