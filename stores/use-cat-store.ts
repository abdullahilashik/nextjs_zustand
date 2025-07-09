import { create } from "zustand";
import {immer} from 'zustand/middleware/immer'
type TCat = {
    cats: {
        smallCat: number,
        bigCat: number
    }
}

interface CatAction {
    addSmallCat: () => void;
    addBigCat: () => void,
    summary: () => string
}


export const useCatStore = create<TCat & CatAction>()(immer((set, get) => ({
    cats: {
        smallCat: 0,
        bigCat: 0
    },
    addSmallCat: () => {
        set((state) => {
            state.cats.bigCat+=1
        });
    },
    addBigCat: () => {
        set((state) => {
            //
            state.cats.smallCat+=1
        });
    },
    summary: () => {
        const totalCats = get().cats.smallCat + get().cats.bigCat;
        return `You have total ${totalCats} ${totalCats > 1 ? 'cats' : 'cat'}`;
    }
})));