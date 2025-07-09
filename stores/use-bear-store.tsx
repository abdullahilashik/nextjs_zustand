import { create } from "zustand";

type TBears = {
  bears: number;
};

interface BearsAction {
  increaseBear: () => void;
  decreaseBear: () => void;
}

type TBearState = TBears & BearsAction;

export const useBearStore = create<TBearState>()((set) => ({
  bears: 0,
  increaseBear: () => {
    set((state) => ({ bears: state.bears + 1 }));
  },
  decreaseBear: () => {
    set((state) => ({ bears: state.bears - 1 }));
  },
}));
