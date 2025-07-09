import { create } from "zustand";

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


export const useCatStore = create<TCat & CatAction>()((set, get) => ({
    cats: {
        smallCat: 0,
        bigCat: 0
    },
    addSmallCat: () => {
        set((state) => ({cats: {...state.cats, smallCat: state.cats.smallCat + 1}}));
    },
    addBigCat: () => {
        set((state) => ({cats: {...state.cats, bigCat: state.cats.bigCat + 1}}));
    },
    summary: () => {
        const totalCats = get().cats.smallCat + get().cats.bigCat;
        return `You have total ${totalCats} ${totalCats > 1 ? 'cats' : 'cat'}`;
    }
}));