import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { devtools } from "zustand/middleware";

interface ICatController {
  cats: {
    big: number;
    small: number;
  };
  addBigCat: () => void;
  addSmallCat: () => void;
  suummary: () => number;
}

export const useCatController = create<ICatController>()(
  devtools(
    immer((set, get) => ({
      cats: {
        big: 0,
        small: 0,
      },
      suummary: () => {
        const total = get().cats.big + get().cats.small;
        return total;
      },
      addBigCat: () => {
        set((state) => {
          state.cats.big += 1;
        });
      },
      addSmallCat: () => {
        set((state) => {
          state.cats.small += 1;
        });
      },
    })),
    {
      enabled: true,
    }
  )
);
