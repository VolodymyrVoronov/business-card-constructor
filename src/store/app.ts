// import { temporal } from "zundo";
import { create } from "zustand";
import { createJSONStorage, devtools, persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

export interface IAppStore {
  test: string;
}

export interface IAppActions {}

export const useAppStore = create(
  persist(
    devtools(
      immer<IAppStore & IAppActions>((set, get) => ({
        test: "test",
      })),
      { limit: 50 }
    ),
    {
      name: "business-card-constructor-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
