import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

type TCat = {
  cats: {
    bigCat: number;
    smallCat: number;
  };
  increaseBigCat: () => void;
  increaseSmallCat: () => void;
  summary: () => string;
};

export const useCatStoreChapter2 = create<TCat>()(
  immer((set, get) => ({
    cats: {
      bigCat: 0,
      smallCat: 0,
    },
    increaseBigCat: () => {
      set((state) => {
        state.cats.bigCat += 1
      });
    },
    increaseSmallCat: () => {
      set((state) => {
        state.cats.smallCat += 1
      });
    },
    summary: () => {
      return "Total Cats " + (get().cats.bigCat + get().cats.smallCat);
    },
  }))
);
