import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { createJSONStorage, persist } from "zustand/middleware";

interface IPersistStore {
  name: string;
  occupation: string;
  updateName: (name: string) => void;
  updateOccupation: (occupation: string) => void;
  update: (name: string, occupation: string) => void;
  reset: () => void;
}

export const usePersistedStore = create<IPersistStore>()(
  persist(
    immer((set, get) => ({
      name: "",
      occupation: "",
      updateName: (name: string) => {
        set((state) => {
          state.name = name;
        });
      },
      updateOccupation: (occupation: string) => {
        set((state) => {
          state.occupation = occupation;
        });
      },
      update: (name: string, occupation: string) => {
        set((state) => {
          state.name = name;
          state.occupation = occupation;
        });
      },
      reset: () => {
        set((state) => {
          (state.name = ""), (state.occupation = "");
        });
      },
    })),
    {
      name: "user-form",
    }      
  )
);
