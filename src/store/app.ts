// import { temporal } from "zundo";
import { produce } from "immer";
import { type IColor } from "react-color-palette";
import { create } from "zustand";
import { createJSONStorage, devtools, persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

import { ConstructorItem, ConstructorItemType } from "@/types";

export interface IAppStore {
  selectedColor: IColor;
  selectedId: string;
  selectedType: ConstructorItemType | undefined;
  dimension: {
    width: number;
    height: number;
  };
  canvasBackgroundColor: string | undefined;
  canvasBackgroundColorOpacity: number;
  canvasGradient: [string, string] | undefined;
  canvasBackgroundImage: string | undefined;
  constructorItems: ConstructorItem[];
}

export interface IAppActions {
  setSelectedColor: (color: IColor) => void;
  setSelectedId: (id: string) => void;
  setSelectedType: (type: ConstructorItemType) => void;
  setDimension: (dimension: IAppStore["dimension"]) => void;
  setCanvasBackgroundColor: (canvasBackgroundColor: string | undefined) => void;
  setCanvasBackgroundColorOpacity: (
    canvasBackgroundColorOpacity: number,
  ) => void;
  setCanvasGradient: (canvasGradient: [string, string] | undefined) => void;

  setCanvasBackgroundImage: (canvasBackgroundImage: string | undefined) => void;
  clearCanvasBackground: () => void;
  addConstructorItem: (item: ConstructorItem) => void;
  deleteConstructorItem: (id: string) => void;
  updateConstructorItems: (items: ConstructorItem[]) => void;
  setConstructorItemBackgroundColor: (color: IColor) => void;
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

        canvasBackgroundColor: undefined,
        canvasBackgroundColorOpacity: 100,
        canvasGradient: undefined,
        canvasGradientDirection: "to right",
        canvasBackgroundImage: undefined,

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

        setCanvasBackgroundColor: (canvasBackgroundColor) => {
          set((state) => {
            state.canvasBackgroundColor = canvasBackgroundColor;
            state.canvasGradient = undefined;
            state.canvasBackgroundColorOpacity = 100;
          });
        },

        setCanvasBackgroundColorOpacity: (canvasBackgroundColorOpacity) => {
          set((state) => {
            state.canvasBackgroundColorOpacity = canvasBackgroundColorOpacity;
          });
        },

        setCanvasGradient: (canvasGradient) => {
          set((state) => {
            state.canvasGradient = canvasGradient;
            state.canvasBackgroundColor = undefined;
          });
        },

        setCanvasBackgroundImage: (canvasBackgroundImage) => {
          set((state) => {
            state.canvasBackgroundImage = canvasBackgroundImage;
          });
        },

        clearCanvasBackground: () => {
          set((state) => {
            state.canvasBackgroundColor = undefined;
            state.canvasGradient = undefined;
            state.canvasBackgroundImage = undefined;
          });
        },

        addConstructorItem: (item) => {
          const isImage = item.type === "image";

          const newItem: ConstructorItem = {
            ...item,
            isSelected: false,
            fill: isImage ? undefined : get().selectedColor.hex,
          };

          set(
            produce((state) => {
              state.constructorItems.push(newItem);
            }),
          );
        },

        deleteConstructorItem: (id) => {
          set(
            produce((state) => {
              state.constructorItems = state.constructorItems.filter(
                (item: ConstructorItem) => item.itemId !== id,
              );
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

        setConstructorItemBackgroundColor: (color: IColor) => {
          const itemId = get().selectedId;

          set((state) => {
            state.constructorItems = state.constructorItems.map((item) => {
              if (item.itemId === itemId) {
                return {
                  ...item,
                  fill: color.hex,
                };
              }
              return item;
            });
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
